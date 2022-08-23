<template>
  <v-container class="pa-4" fluid>
    <v-card :loading="loading">
      <v-card-title>
        <span>Add Domains</span>
        <v-spacer/>
        <v-btn icon @click="showInfo = !showInfo">
          <v-icon>mdi-information-outline</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <v-alert border="left" color="blue-grey" v-model="showInfo">
          <p>
            Create method that splits string of domains by linebreak <code>\n</code>. For each domain, build a payload to
            have default value for other columns, but setting domain_name to domain. ex:
          </p>
          <p>
            <code>
              {
              "domain_name": "bisflex.com",
              "user_id": 88881,
              "domain_name_no_tld": "Bisflex",
              "time_added_to_user": "8/23/2022, 1:14:07 PM",
              "is_idn": false,
              "imprint": true,
              "folder_id": null,
              "folder_name": "Unassigned",
              "id": 35707632
              }
            </code>
          </p>
        </v-alert>
      </v-card-text>
      <v-card-text>
        <v-textarea
          v-model="domains"
          filled
          ref="domains"
          label="Domains"
          :placeholder="'example.com\ngoogle.com\nmagic.com'"
          hint="Enter one domain name per line."
          :rules="rules"
          persistent-hint
        />
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" width="100%" @click="parseAndSaveDomains(domains)">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-alert
      v-if="created"
      dense
      text
      type="success"
    >
      The domains were successfully created
    </v-alert>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      created: false,
      showInfo: false,
      existingDomainNames: [],
      domains: '',
      rules: [
        v => !!v || 'Domains are required',
        v => !v.split("\n").filter(domain => !/(?:[\w-]+:?|[\w\d]+[.])?[^\s()<>]+[.](?:\([\w\d]+\)|([^\s]|)+)/.test(domain)).length || 'Domains must be valid',
        v => {
          let domains = {}
          v.split("\n").forEach(i => {
            if (!domains[i]) {
              domains[i] = 0
            }
            domains[i] += 1
          })
          return !Object.keys(domains).filter(i => domains[i] > 1).length || 'Domains must be unique'
        },
        v => {
          let exists = v.split("\n").filter(domain => this.existingDomainNames.includes(domain))
          return !exists.length || `Domain ${exists[0]} already exist`
        }
      ]

    }
  },
  watch: {
    created(val) {
      if (!val) return
      setTimeout(() => (this.created = false), 4000)
    },
  },
  async mounted() {
    await this.$axios.get('/domains').then(response => {
      this.existingDomainNames = response.data.map(i => i.domain_name)
    }).catch(error => console.log(error.response.data))
  },
  methods: {
    /**
     * @todo: Split domains and assign to independent payloads then save using `POST | /domains` endpoint.
     * @todo: Close the dialog once the domains are saved successfully and load new domains to list.
     */
    parseAndSaveDomains(domains) {
      console.log(domains)
    }
  }
}
</script>
