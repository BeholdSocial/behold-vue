<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    feedId: { type: String, required: true },
  },
  mounted() {
    const existingScriptEl = document.querySelector(
      '[src*="https://w.behold.so/widget.js"]'
    )
    const placeholderEls = document.querySelectorAll(
      ".behold-sdk-vue-widget-placeholder"
    )

    if (!existingScriptEl && !customElements.get("behold-widget")) {
      const scriptEl = document.createElement("script")
      scriptEl.src = "https://w.behold.so/widget.js"
      scriptEl.type = "module"
      document.body.appendChild(scriptEl)
    }

    placeholderEls.forEach((placeholderEl) => {
      if (placeholderEl instanceof HTMLElement) {
        const widgetEl = document.createElement("behold-widget")
        widgetEl.setAttribute("feed-id", placeholderEl.dataset.feedid || "")
        widgetEl.addEventListener("load", () => {
          this.$emit("load")
        })
        placeholderEl.replaceWith(widgetEl)
      }
    })
  },
})
</script>

<template>
  <div class="behold-sdk-vue-widget-placeholder" :data-feedid="feedId"></div>
</template>
