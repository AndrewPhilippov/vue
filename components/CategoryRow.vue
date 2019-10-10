<template>
  <div>
    <v-container
      class="pa-2 category-container"
      fluid
    >
      <h2 class="display-3 py-3">{{ title[0] }}</h2>
      <v-divider class="mb-5"></v-divider>

      <v-row>
        <v-col
          class="pt-0 "
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex[1]"
        >
          <nuxt-link :to="/news/" tag="div">
            <v-card>
              <v-img
                :src="card.src"
                class="white--text"
                height="200px"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              >
                <v-card-title
                  class="fill-height align-end"
                  v-text="card.title"
                ></v-card-title>
              </v-img>

              <v-card-actions>
                <div class="flex-grow-1"></div>

                <!--<v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn> todo открыть, когда будет ЛК пользователя -->

                <!--<v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>  todo открыть, когда будет ЛК пользователя -->

                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
    export default {
        name: "CategoryRow",
        data() {
            return {
                title: ['Politics', 'Economics', 'Sports', 'Culture', 'Health'],
                cards: [
                    {
                        title: 'Pre-fab homes',
                        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
                        flex: [6, 12],
                        category: 'Politics'
                    },
                    {
                        title: 'Favorite road trips',
                        src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
                        flex: [6, 12]
                    },
                    {title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: [6, 12]},
                ],
            }
        }
    }
</script>

<style scoped>
  .category-container {
    width: 800px;
  }
</style>
