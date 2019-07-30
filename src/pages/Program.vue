<template>
  <q-page>
    <div>
      <transition-group
        appear
        enter-active-class="animated slideInUp"
        leave-active-class="animated slideOutUp"
      >
        <h4>Planning</h4>
        <q-card key="first" class="shadow-8">
          <q-card-section>
            <div class="text-bold"><q-icon name="access_time" /> 13h30 - 14h30</div>
            <q-list separator>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-h6 text-primary">Accueil des participants</q-item-label>
                  <q-item-label caption>
                    <span><q-icon name="person" /> Equipe poitiers collectif</span><span><q-icon name="place" /> Hall d'accueil</span>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
        <q-card key="second" class="shadow-8">
          <q-card-section>
            <div class="text-bold"><q-icon name="access_time" /> 14h30 - 16h30</div>
            <q-list separator>
              <q-item>
                <q-item-section>
                  <q-item-label class="">Atelier A</q-item-label>
                  <q-item-label caption>
                    <span><q-icon name="person" /> Intervenant</span><span><q-icon name="place" /> Salle A</span>
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="">Atelier B</q-item-label>
                  <q-item-label caption>
                    <span><q-icon name="person" /> Intervenant</span><span><q-icon name="place" /> Amphi J</span>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </transition-group>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Program'
}
</script>

<style lang="stylus" scoped>
  .q-card:not(:first-child)
    margin-top 15px
</style>
