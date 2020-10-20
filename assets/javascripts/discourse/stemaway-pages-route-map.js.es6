export default function() {
  this.route("staticAbout", { path: "/static/:username", resetNamespace: true })
}
