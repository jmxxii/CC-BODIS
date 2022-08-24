<template>
  <v-container class="px-4" fluid>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card :loading="loading">
          <v-card-text>
            <v-row align="center">
              <v-col cols="8">
                <div class="headline mb-2">Domains</div>
                Total number of domains in account.
              </v-col>
              <v-col class="display-3 text-center" cols="4">
                {{ stats.domains || '?' }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card :loading="loading">
          <v-card-text>
            <v-row align="center">
              <v-col cols="8">
                <div class="headline mb-2">Inactive Domains</div>
                Total number of domains inactive.
              </v-col>
              <v-col class="display-3 text-center" cols="4">
                {{ stats.inactive_domains || '?' }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card :loading="loading">
          <v-card-text>
            <v-row align="center">
              <v-col cols="8">
                <div class="headline mb-2">Active Domains</div>
                Total number of active domains.
              </v-col>
              <v-col class="display-3 text-center" cols="4">
                {{ stats.active_domains || '?' }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card :loading="loading">
          <v-card-text>
            <v-row align="center">
              <v-col cols="8">
                <div class="headline mb-2">International Domains</div>
                Total number of international domains.
              </v-col>
              <v-col class="display-3 text-center" cols="4">
                {{ stats.international_domains || '?' }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      loading: false,
      stats: {}
    }
  },
  mounted() {
    this.fetchStats();
  },
  /**
   * @todo: Retrieve Stats from endpoint `/stats`.
   */
  methods: {
    async fetchStats() {
      try {
      }
      catch (e) {
      }
      finally {
      }
    }
  }
}
</script>
