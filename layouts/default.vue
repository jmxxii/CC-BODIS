<template>
  <v-app>
    <v-navigation-drawer
     v-model="drawer"
     :mini-variant="miniVariant"
     :clipped="clipped"
     fixed
     app >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer/>
      <v-btn
        icon
        @click.stop="setMode"
      >
        <v-icon>{{ isDarkMode ? 'mdi-weather-night' : 'mdi-theme-light-dark' }}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>Code Challenge &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      isDarkMode: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/'
        },
        {
          icon: 'mdi-view-list',
          title: 'Domains',
          to: '/domains'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Code Challenge',
          to: '/code-challenge'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Ads.com'
    }
  },
  methods: {
    /**
     * @todo: Make theme dark/light mode selection persist through page refresh and navigation.
     */
    setMode() {
      this.isDarkMode = !this.isDarkMode
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>
