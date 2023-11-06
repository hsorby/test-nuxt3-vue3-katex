import { defineNuxtPlugin } from "#app";

import VueKatex from "@hsorby/vue3-katex";
import "katex/dist/katex.min.css";

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueKatex, {
    mhchem: true,
    globalOptions: {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\begin{equation}", right: "end{equation}", display: true },
        { left: "\begin{align}", right: "end{align}", display: true },
      ],
    },
  });
});
