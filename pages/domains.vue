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
          @keyup="handleSearch"
        />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items.sync="filteredDomains"
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
                <v-icon 
                  :color="item.imprint ? 'green':'red'"
                >
                  mdi-fingerprint
                </v-icon>
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
      <add-domain @close="refreshDomains" />
    </v-dialog>
  </v-container>
</template>

<script>
import AddDomain from '../components/AddDomain.vue';

export default {
  components: {AddDomain},
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
      searchedDomains: [],
    }
  },
  computed: {
    filteredDomains() {
      if (this.search.length) {
        return this.searchedDomains
      }

      return this.domains;
    },
  },
  mounted() {
    this.fetchDomains();
  },
  methods: {
    async fetchDomains() {
      this.loading = true;

      try {
        this.domains = (await this.$axios.get(`/domains`)).data;
      }
      catch (e) {
        console.log(e);
      }
      finally {
        this.loading = false
      }
    },
    async handleSearch() {
      if (this.search.length) {
        this.loading = true;

        try {
          this.searchedDomains = (await this.$axios.get(`/domains?domain_name=${this.search}`)).data;
        }
        catch (e) {
          console.log(e);
        }
        finally {
          this.loading = false
        }
      }
    },
    async handleImprint(item, index) {
      this.loading = true;

      try {
        await (this.$axios.put(`/domains/${item.id}`, {...item, imprint: !item.imprint}));
      }
      catch (e) {
        console.log(e);
      }
      finally {
        this.loading = false;
        this.fetchDomains();
      }
    },
    async handleDelete(item, index) {
      this.loading = true;

      try {
        await (this.$axios.delete(`/domains/${item.id}`));
      }
      catch (e) {
        console.log(e);
      }
      finally {
        this.loading = false;
        this.domains = this.domains.filter((d) => d.id !== item.id);
        /* 
          You can either fetch domains again or 
          remove the domain from the current data we have
          or both, if preferred 
        */
        // this.fetchDomains();
      }
    },
    refreshDomains() {
      this.showDialog = false;
      this.fetchDomains();
    }
  }
}
</script>
