export const ready = (() => {
  let isReady = false;
  let resolveReady;

  const readyPromise = new Promise((resolve) => {
    resolveReady = resolve;
  });

  function completed() {
    if (isReady) return;

    isReady = true;

    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);

    resolveReady();
  }

  // Vérifications équivalentes à jQuery
  if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
  ) {
    // Exécution différée, même si le DOM est déjà prêt
    setTimeout(completed, 0);
  } else {
    // Événement principal
    document.addEventListener("DOMContentLoaded", completed);

    // Sécurité de repli
    window.addEventListener("load", completed);
  }

  return function ready(callback) {
    if (typeof callback !== "function") {
      throw new TypeError("ready attend une fonction");
    }

    readyPromise
      .then(() => callback.call(document))
      .catch((error) => {
        // Une erreur ne bloque pas les autres callbacks
        setTimeout(() => {
          throw error;
        }, 0);
      });
  };
})();
