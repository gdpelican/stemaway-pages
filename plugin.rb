# frozen_string_literal: true

# name: new-page
# about: Demonstrate adding a new static page with a Discourse plugin
# version: 0.1
# authors: James Kiesel (gdpelican)

after_initialize do
  Discourse::Application.routes.prepend do
    get "/static/about" => "static#about"
  end

  class ::StaticController < ApplicationController
    before_action :set_view_path

    def about
      store_preloaded("categories", MultiJson.dump(Category.all))
    end

    private

    def set_view_path
      append_view_path "plugins/stemaway-pages/views"
    end
  end
end
