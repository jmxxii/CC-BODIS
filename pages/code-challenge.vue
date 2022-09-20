<template>
  <v-container class="pa-4" fluid>
    <v-card>
      <v-card-title>
        TODO LIST
      </v-card-title>

      <v-card-text>
        <v-alert type="info">
          This page outlines requirements of the code challenge. Please complete at least 50+ points, and if you enjoy a challenge, we encourage you complete as much as you can.
        </v-alert>
        <v-list subheader two-line flat>
          <!-- TODO: Make this its own component -->
          <!-- <todo :title="domains" :items="[]"> -->
          <v-subheader>Dashboard</v-subheader>
          <v-list-item-group v-model="checklist" multiple>
            <v-list-item value="active_domains">
              <template v-slot:default="{ active, toggle }">
                <v-list-item-action>
                  <v-checkbox :input-value="active" color="primary" @click="toggle"/>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="d-flex justify-space-between"><span>Domains</span> <small>4 pts.</small></v-list-item-title>
                  <v-list-item-subtitle>
                    Retrieve total domains from endpoint <code>GET | /stats</code>.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>
            <v-list-item value="trashed_domains">
              <template v-slot:default="{ active, toggle }">
                <v-list-item-action>
                  <v-checkbox :input-value="active" color="primary" @click="toggle"/>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="d-flex justify-space-between"><span>Inactive Domains</span> <small>4 pts.</small></v-list-item-title>
                  <v-list-item-subtitle>
                    Retrieve total <strong>inactive domains</strong> from endpoint <code>GET | /stats</code>.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>
            <v-list-item value="internationalized_domains">
              <template v-slot:default="{ active, toggle }">
                <v-list-item-action>
                  <v-checkbox :input-value="active" color="primary" @click="toggle"/>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="d-flex justify-space-between"><span>Active Domains</span> <small>4 pts.</small></v-list-item-title>
                  <v-list-item-subtitle>
                    Retrieve total <strong>Active domains</strong> from endpoint <code>GET | /stats</code>.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>
            <v-list-item value="imprinted_domains">
              <template v-slot:default="{ active, toggle }">
                <v-list-item-action>
                  <v-checkbox :input-value="active" color="primary" @click="toggle"/>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="d-flex justify-space-between"><span>International Domains</span> <small>4 pts.</small></v-list-item-title>
                  <v-list-item-subtitle>
                    Retrieve total <strong>international domains</strong> from endpoint <code>GET | /stats</code>.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>
          </v-list-item-group>
          <v-divider></v-divider>
          <!-- </todo> -->
          <!-- <todo :title="domains" :items="[]"> -->
          <v-subheader>Domains</v-subheader>
          <v-list-item-group v-model="checklist" multiple>
            <v-list-item value="search_filter">
              <template v-slot:default="{ active, toggle }">
                <v-list-item-action>
                  <v-checkbox :input-value="active" color="primary" @click="toggle"/>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="d-flex justify-space-between"><span>Search Filter</span> <small>10 pts.</small></v-list-item-title>
                  <v-list-item-subtitle>
                    Make the <strong>search input field</strong> filter the domains displayed by asynchronously querying
                    api endpoint <code>GET | /domains?domain_name={domain}"</code>.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>
            <v-list-item value="delete_domains">
              <template v-slot:default="{ active, toggle }">
                <v-list-item-action>
                  <v-checkbox :input-value="active" color="primary" @click="toggle"/>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="d-flex justify-space-between"><span>Delete Domains</span> <small>10 pts.</small></v-list-item-title>
                  <v-list-item-subtitle>
                    Make the <strong>delete icon</strong> remove domain using api endpoint <code> DELETE |
                    /domains/{id}</code>.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>
            <v-list-item value="toggle_imprint">
              <template v-slot:default="{ active, toggle }">
                <v-list-item-action>
                  <v-checkbox :input-value="active" color="primary" @click="toggle"/>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="d-flex justify-space-between"><span>Toggle Imprint</span> <small>10 pts.</small></v-list-item-title>
                  <v-list-item-subtitle>
                    Make the <strong>imprint icon</strong> toggle the imprint flag for a domain by changing icon color
                    when true/false. <code> PUT | /domains/{id}</code>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>
            <v-list-item value="load_component">
              <template v-slot:default="{ active, toggle }">
                <v-list-item-action>
                  <v-checkbox :input-value="active" color="primary" @click="toggle"/>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="d-flex justify-space-between"><span>Use <code>AddDomain</code> Component</span> <small>20 pts.</small></v-list-item-title>
                  <v-list-item-subtitle>
                    Load the <strong>Add Domain</strong> component into the <code>{{ '<\ v-dialog >' }}</code> shown
                    when clicking plus icon at bottom of Domain page.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>
            <v-list-item value="add_domains">
              <template v-slot:default="{ active, toggle }">
                <v-list-item-action>
                  <v-checkbox :input-value="active" color="primary" @click="toggle"/>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="d-flex justify-space-between"><span>Add Domains</span> <small>20 pts.</small></v-list-item-title>
                  <v-list-item-subtitle>
                    <p>Make the <strong>add domains form</strong> store new domains. <code> POST | /domains</code></p>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>
          </v-list-item-group>
          <v-divider></v-divider>
          <!-- </todo> -->
          <!-- <todo :title="domains" :items="[]"> -->
          <v-subheader>Code Challenge</v-subheader>
          <v-list-item-group v-model="checklist" multiple>
            <v-list-item value="todo_list_into_component">
              <template v-slot:default="{ active, toggle }">
                <v-list-item-action>
                  <v-checkbox :input-value="active" color="primary" @click="toggle"/>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="d-flex justify-space-between"><span>TODO LIST</span> <small>20 pts.</small></v-list-item-title>
                  <v-list-item-subtitle>
                    Convert the template into a dynamic property driven component. See file <code>/pages/code-challenge.vue</code>
                    for in-code comments.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>
          </v-list-item-group>
          <v-divider></v-divider>
          <!-- </todo> -->
          <!-- <todo :title="domains" :items="[]"> -->
          <v-subheader>Bonus</v-subheader>
          <v-list-item-group v-model="checklist" multiple>
            <v-list-item value="dark_mode">
              <template v-slot:default="{ active, toggle }">
                <v-list-item-action>
                  <v-checkbox :input-value="active" color="primary" @click="toggle"/>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="d-flex justify-space-between"><span>Dark Mode</span> <small>4 pts.</small></v-list-item-title>
                  <v-list-item-subtitle>
                    Make theme dark/light mode selection persist through page refresh and navigation.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>
          </v-list-item-group>
          <!-- </todo> -->
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      checklist: [],
    }
  },
  mounted() {
    this.checklist = JSON.parse(localStorage.getItem('checklist')) || [];
  },
  watch: {
    checklist: function (checklist) {
      localStorage.setItem('checklist', JSON.stringify(checklist));
    }
  }
}
</script>
