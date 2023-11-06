<?php get_header(); ?>


<main class="top-main">
  <section class="main">
    <img src="<?php echo esc_url(get_theme_file_uri('dist/imgs/main-sentence.png')); ?>" alt="">
    <div class="main__contents">

    </div>
    </div>
    <div class="main__container-img-left"><img src="<?php echo esc_url(get_theme_file_uri('dist/imgs/main-book.png')); ?>" alt=""></div>
    <div class="main__container-img-right">
      <div>
        <picture>
          <source srcset="<?php echo esc_url(get_theme_file_uri('dist/imgs/main-person.webp')); ?>" type="image/webp">
          <img src="<?php echo esc_url(get_theme_file_uri('dist/imgs/main-person.png')); ?>" alt="">
        </picture>

      </div>
    </div>
    </div>
    <div class=" main__container-img-right pc-img">
      <div>
        <picture>
          <source srcset="<?php echo esc_url(get_theme_file_uri('dist/imgs/main-person.webp')); ?>" type="image/webp">
          <img src="<?php echo esc_url(get_theme_file_uri('dist/imgs/main-person.png')); ?>" alt="">
        </picture>
      </div>
    </div>
  </section>
  </section>
</main>
<?php get_footer(); ?>