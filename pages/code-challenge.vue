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
          <todo 
            v-for="(todo, i) in todoItems"
            :key="`${todo.title}-${i}`"
            :title="todo.title" 
            :items="todo.items"
            :checklist="checklist"
            @input="updateCheckList"
          />
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Todo from '../components/Todo.vue';

export default {
  components: {Todo},
  data() {
    return {
      checklist: [],
      todoItems: [
        {
          title: 'Dashboard',
          items: [
            {
              title: `<span>Domains</span> <small>4 pts.</small>`,
              description: `Retrieve total domains from endpoint <code>GET | /stats</code>.`,
              value: `active_domains`,
            },
            {
              title: `<span>Inactive Domains</span> <small>4 pts.</small>`,
              description: `Retrieve total <strong>inactive domains</strong> from endpoint <code>GET | /stats</code>.`,
              value: `trashed_domains`,
            },
            {
              title: `<span>International Domains</span> <small>4 pts.</small>`,
              description: `Retrieve total <strong>international domains</strong> from endpoint <code>GET | /stats</code>.`,
              value: `internationalized_domains`,
            },
            {
              title: `<span>Active Domains</span> <small>4 pts.</small>`,
              description: `Retrieve total <strong>Active domains</strong> from endpoint <code>GET | /stats</code>.`,
              value: `imprinted_domains`,
            },
          ],
        },
        {
          title: 'Domains',
          items: [
            {
              title: `<span>Search Filter</span> <small>10 pts.</small>`,
              description: `Make the <strong>search input field</strong> filter the domains displayed by asynchronously querying api endpoint <code>GET | /domains?domain_name={domain}"</code>.`,
              value: `search_filter`,
            },
            {
              title: `<span>Delete Domains</span> <small>10 pts.</small>`,
              description: `Make the <strong>delete icon</strong> remove domain using api endpoint <code> DELETE | /domains/{id}</code>.`,
              value: `delete_domains`,
            },
            {
              title: `<span>Toggle Imprint</span> <small>10 pts.</small>`,
              description: `Make the <strong>imprint icon</strong> toggle the imprint flag for a domain by changing icon color when true/false. <code> PUT | /domains/{id}</code>`,
              value: `toggle_imprint`,
            },
            {
              title: `<span>Use <code>AddDomain</code> Component</span> <small>20 pts.</small>`,
              description: `Load the <strong>Add Domain</strong> component into the <code>{{ '<\ v-dialog >' }}</code> shown when clicking plus icon at bottom of Domain page.`,
              value: `load_component`,
            },
            {
              title: `<span>Add Domains</span> <small>20 pts.</small>`,
              description: `<p>Make the <strong>add domains form</strong> store new domains. <code> POST | /domains</code></p>`,
              value: `add_domains`,
            },
          ],
        },
        {
          title: 'Code Challenge',
          items: [
            {
              title: `<span>TODO LIST</span> <small>20 pts.</small>`,
              description: `Convert the template into a dynamic property driven component. See file <code>/pages/code-challenge.vue</code> for in-code comments.`,
              value: `todo_list_into_component`,
            }
          ],
        },
        {
          title: 'Bonus',
          items: [
            {
              title: `<span>Dark Mode</span> <small>4 pts.</small>`,
              description: `Make theme dark/light mode selection persist through page refresh and navigation.`,
              value: `dark_mode`,
            }
          ],
        },
      ]
    }
  },
  mounted() {
    this.checklist = JSON.parse(localStorage.getItem('checklist')) || [];
  },
  watch: {
    checklist: function (checklist) {
      localStorage.setItem('checklist', JSON.stringify(checklist));
    }
  },
  methods: {
    updateCheckList(val) {
      this.checklist = val;
    }
  },
}
</script>
