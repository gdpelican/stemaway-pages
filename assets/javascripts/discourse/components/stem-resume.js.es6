import { ajax } from "discourse/lib/ajax";
import Component from "@ember/component";

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);

    ajax(`/topics/created-by/${this.username}.json`).then(topics => {
      console.log(topics)
      this.setProperties({ topics })
    })

    ajax(`/users/${this.username}.json`).then(({ user }) => {
      console.log(user)
      this.setProperties({ user })
    })

    ajax(`/tag_groups.json`).then(tag_groups => {
      console.log(tag_groups)
      this.setProperties({ tag_groups })
    })
  }
});
