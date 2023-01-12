<template>
  <div class="todo">
    <v-subheader>{{ title }}</v-subheader>
    <v-list-item-group v-model="localChecklist" multiple>
      <v-list-item 
        v-for="(item, i) in items"
        :key="`${item.value}-${i}`"
        :value="item.value"
      >
        <template v-slot:default="{ active, toggle }">
          <v-list-item-action>
            <v-checkbox :input-value="active" color="primary" @click="toggle"/>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="d-flex justify-space-between" v-html="item.title" />
            <v-list-item-subtitle v-html="item.description" />
          </v-list-item-content>
        </template>
      </v-list-item>
    </v-list-item-group>
    <v-divider></v-divider>
  </div>
</template>

<script>
  export default {
    props: {
      checklist: {
        type: Array,
        default: () => [],
      },
      items: {
        type: Array,
        default: () => [],
      },
      title: {
        type: String,
        default: '',
      },
    },
    data() {
      return {};
    },
    computed: {
      localChecklist: {
        get() {
          return this.checklist;
        },
        set(val) {
          this.$emit('input', val);
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>