import { setModifierManager } from "@ember/modifier";

export default setModifierManager(
  owner => ({
    createModifier(factory, args) {},

    installModifier(instance, element, args) {
      console.log(element)
      element.style.opacity = 0;
      setTimeout(() => {
        element.style.opacity = 1;
      },1000)
    },

    updateModifier(instance, args) {},

    destroyModifier(instance, args) {}
  }),

  class HideModifier {
  }
);