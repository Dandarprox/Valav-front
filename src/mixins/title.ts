import Vue from 'vue';
import { mapMutations, mapState } from 'vuex';
import { Component } from 'vue-property-decorator';

@Component({
  computed: {
    showBackButton: {
      get() { return this.$store.state.showBackButton },
      set(value) { this.$store.state.showBackButton = value; }
    }
  },
  methods: mapMutations({
    'setLayoutTitle': 'mainTitle'
  })
})
export class titleMixin extends Vue {
  constructor() {
    super();
    this.backSubscribe();
  }

  layoutTitle: string = '';
  showBackButton!: Boolean;
  
  onGoBack() {};
  setLayoutTitle!: Function;

  backSubscribe() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type == 'goBack') {
        this.onGoBack();
      }
    })
  }
}
