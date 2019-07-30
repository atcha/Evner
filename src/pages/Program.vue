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
            <div class="flex row items-center text-bold"><q-icon name="access_time" />13h30 - 14h30</div>
            <q-list separator>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-bold text-primary">Accueil des participants</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label class="flex row items-center" caption><q-icon name="person" class="text-secondary" />Equipe poitiers collectif</q-item-label>
                  <q-item-label class="flex row items-center" caption><q-icon name="place" class="text-secondary" />Hall d'accueil</q-item-label>
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
                  <q-item-label class="text-bold text-primary">Atelier A</q-item-label>
                  <q-item-label caption>Courte explication de l'atelier</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label class="flex row items-center" caption><q-icon name="person" class="text-secondary" /> Intervenant</q-item-label>
                  <q-item-label class="flex row items-center" caption><q-icon name="place" class="text-secondary" /> Salle A</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-bold text-primary">Atelier B</q-item-label>
                  <q-item-label caption>Courte explication de l'atelier</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label class="flex row items-center" caption><q-icon name="person" class="text-secondary" /> Intervenant</q-item-label>
                  <q-item-label class="flex row items-center" caption><q-icon name="place" class="text-secondary" /> Amphy J</q-item-label>
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
  .q-icon
    margin-right 5px
</style>
