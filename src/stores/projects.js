import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useProjectStore = defineStore("projects", () => {
  const data = ref([]);
  const load = ref(4);
  const notice = ref("");

  const loadData = () => {
    if (data.value <= 0) {
      fetch("data.json")
        .then((t) => t.json())
        .then((t) => {
          data.value = t.projects;
        });
    }
  };

  const loadMore = () => {
    load.value < data.value.length
      ? (load.value += 3)
      : (notice.value = "Sorry! No Project Left");
  };

  const last = computed(() => data.value[0] || []);
  const filteredProject = computed(() => data.value.slice(1, load.value));

  return { data, loadData, last, filteredProject, loadMore, notice };
});
