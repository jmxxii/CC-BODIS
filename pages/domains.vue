<template>
  <v-container class="pa-4" fluid>
    <v-card>
      <v-card-title>
        Domains
        <div class="flex-grow-1" />
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items.sync="domains"
        :loading="loading"
        :search="search"
        disable-sort
      >
        <template v-slot:body="{ items }">
          <tbody>
          <tr v-for="(item, i)  in items" :key="item.id">
            <td>
              {{ item.domain_name }}
            </td>
            <td>{{ new Date(item.time_added_to_user).toLocaleString() }}</td>
            <td>{{ item.is_idn }}</td>
            <td>{{ item.imprint }}</td>
            <td>
              <v-btn icon @click="handleImprint(item, i)">
                <v-icon>mdi-fingerprint</v-icon>
              </v-btn>
              <v-btn icon @click="handleDelete(item, i)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </td>
          </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-card>
    <v-btn
      fab
      color="primary"
      bottom
      right
      absolute
      @click="showDialog = !showDialog"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog
      v-model="showDialog"
      max-width="600px"
    >
      <!-- TODO: Load the <strong>Create Domain</strong> component into the dialog in domains page. -->
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      search: '',
      showDialog: false,
      headers: [
        { text: 'Domain Name', value: 'domain_name', },
        { text: 'Created At', value: 'time_added_to_user' },
        { text: 'Internationalized', value: 'is_idn' },
        { text: 'Imprinted', value: 'imprint' },
      ],
      domains: [],
    }
  },
  mounted() {
    this.fetchDomains();
  },
  methods: {
    /**
     * @todo Set loading state while call is being process.
     */
    async fetchDomains() {
      try {
        this.domains = (await this.$axios.get(`/domains`)).data;
      }
      catch (e) {
        console.log(e);
      }
      finally {
      }
    },

    /**
     * @todo Make the search input field filter the domains displayed by asynchronously querying api endpoint GET | /domains?domain_name={domain}.
     */
    async handleSearch(value) {

    },

    /**
     * @todo Make the imprint icon toggle the imprint flag for a domain by changing icon color when true/false. PUT | /domains/{id}
     */
    async handleImprint(item, index) {

    },

    /**
     * @todo Make the delete icon remove domain using api endpoint DELETE | /domains/{id}
     */
    async handleDelete(item, index) {

    },
  }
}
</script>
