<?php
function theme_enqueue_styles()
{

  wp_enqueue_style('main-css', get_template_directory_uri() . '/dist/css/style.css');

  wp_enqueue_script('main-js', get_template_directory_uri() . '/dist/js/main.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'theme_enqueue_styles');
