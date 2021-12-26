import { useEffect } from "react";

const useDiscuss = (id: number, url: string, disqusId: string) => {
  useEffect(() => {
    if (!id || !url) return;
    var disqus_config = function () {
      this.page.url = url;
      this.page.identifier = id;
    };

    var disqus_observer = new IntersectionObserver(
      function (entries) {
        // comments section reached
        // start loading Disqus now
        if (entries[0].isIntersecting) {
          (function () {
            var d = document,
              s = d.createElement("script");
            s.src = `https://${disqusId}.disqus.com/embed.js`;
            s.setAttribute("data-timestamp", +new Date());
            (d.head || d.body).appendChild(s);
          })();

          // once executed, stop observing
          disqus_observer.disconnect();
        }
      },
      { threshold: [0] }
    );
    disqus_observer.observe(document.querySelector("#disqus_thread"));

    return () => {
      disqus_observer.unobserve(document.querySelector("#disqus_thread"));
    };
  }, [id, url]);
};

export default useDiscuss;
