import * as nunjucks from 'nunjucks';

const renderer = new nunjucks.Environment(null, {trimBlocks: true, autoescape: false})
renderer.addFilter('date', (str, format) => {
  return window.moment(str).format(format);
});

const LAYOUT_TEMPLATE = `
{{metadata}}

## Highlights
{{highlights}}
`;

const METADATA_TEMPLATE = `
## Metadata
url: [{{url}}]({{url}})
{% if author %}
author: {{author}}
{% endif %}
{% if publisher %}
publisher: {{publisher}}
{% endif %}
{% if published_date %}
published: {{published_date|date("YYYY-MM-DD")}}
{% endif %}
{% if note %}
note: {{note}}
{% endif %}
{% if tags %}
tags: {% for tag in tags %}{{tag | replace(' ', '_')}}{% if not loop.last %}, {% endif %}{% endfor%}
{% endif %}
`;

const HIGHLIGHT_TEMPLATE = `
* {{text}}
{% if note %}
  * **Note**: {{note}}
{% endif %}
`;

export {
  renderer,
  LAYOUT_TEMPLATE,
  METADATA_TEMPLATE,
  HIGHLIGHT_TEMPLATE
}
