(function() {
  const pages = [
    {{ range $index, $page := .Site.Pages }}
      {{- if $index -}},{{- end }}
      {
        "idx": {{ $index }},
        "href": "{{ $page.Permalink }}",
        "title": {{ (partial "title" $page) | jsonify }},
        "content": {{ $page.Plain | jsonify }}
      }
    {{- end -}}
  ];

  window.bookSearch = {
    pages: pages,
    idx: lunr(function() { 
      this.ref("idx");
      this.field("title");
      this.field("content");

      pages.forEach(this.add, this);
    }),
  }
})();
