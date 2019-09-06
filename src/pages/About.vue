<template>
  <q-page>
    <div class="main" key="whois-container">
      <transition-group
        appear
        enter-active-class="animated slideInUp"
        leave-active-class="animated slideOutUp"
      >
      <div key="title-container">
        <h6 class="text-primary">Qui sommes nous ?</h6>
      </div>
      <q-card key="about-container" class="no-shadow">
        <q-card-section>
          <q-list separator>
            <q-item>
              <q-item-section>
                <q-item-label>
                  <p>Poitiers Collectif est une démarche citoyenne, ouverte et démocratique.</p>
                  <p>Nous avons commencé à travailler sur le projet dès le printemps 2018. Il a ensuite été publiquement lancé à l’automne 2018.</p>
                  <p>Permettre à chaque poitevin, chaque poitevine, d’agir pour la vie politique locale : c’est le pari que nous faisons avec Poitiers Collectif. Nous avons pour ambition de construire un projet ambitieux et réaliste pour les élections municipales de 2020, avec toutes celles et ceux qui font la richesse de Poitiers et Grand Poitiers.</p>
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label class="text-bold">Site internet</q-item-label>
                <q-item-label caption>
                  <q-btn icon="arrow_forward"
                         label="Site de Poitiers Collectif"
                         unelevated
                         color="primary"
                         type="a"
                         href="http://poitierscollectif.fr/"
                         target="_blank"
                         replace />
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label class="text-bold">Contact</q-item-label>
                <q-item-label caption>
                  <a href="mailto:contact@poitierscollectif.fr">contact@poitierscollectif.fr</a>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
      <div key="title-container">
        <h6 class="text-primary">L'application</h6>
      </div>
      <q-card key="about-container" class="no-shadow">
        <q-card-section>
          <q-list separator>
            <q-item>
              <q-item-section>
                <q-item-label>
                  <p>Application réalisée grâce à <a href="https://quasar.dev/" target="_blank">Quasar</a> par <a href="https://twitter.com/AtChA_" target="_blank">AtChA</a>.</p>
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
  name: 'About',
  mounted () {
    this.$store.commit('siteInfo/updateSiteTitle', 'A propos')
  }
}
</script>

<style scoped>

</style>
