(function(root){
  'use strict';
  class AddPostFormView {

    constructor() {
      this.template = $('#template-add-post').html();
      this.render();
      this.$form = $('#add-post-form');
      this.setupListeners();
    }

    render() {
      let $container = $('#view-container');
      let templateCompiled = root.Handlebars.compile(this.template);
      $container.append(templateCompiled);
    }

    setupListeners() {
      this.$form.submit((event) => this.submitFormHandler(event));
    }

    submitFormHandler(event) {
      console.log(event);
    }

  }

  root.Blog.AddPostFormView = AddPostFormView;
}(window)); 
