<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <?php wp_head(); ?>
</head>

<body>
  <!-- pc版header始まり -->
  <header class="header js-header">
    <div class="header__contents">
      <div class="header__container">
      </div>

    </div>

  </header>

  <!-- pc版header終わり -->
  <!-- スマホ版 1040pxの場合のheader開始-->
  <header class="sp-header js-header">
    <h1 class="sp-header__logo">
      <a>
        <picture>
          <source srcset="<?php echo get_theme_file_uri('dist/imgs/header-logo.webp'); ?>" type="image/webp">
          <img src="<?php echo get_theme_file_uri('dist/imgs/header-logo.png'); ?>">
        </picture>
      </a>
    </h1>
    <div class="sp-header__humburger-sns">
      <!-- ハンバーガー部分 　クリックで表示したい-->
      <div class="sp-header__humburger" id="js-box">
        <div class="humburger__container">
          <div class="humburger__bars">
            <span class="humburger__bar"></span>
            <span class="humburger__bar"></span>
            <span class="humburger__bar"></span>
            <!-- <div class="humburgers__title">menu</div>
            <div class="humburgers__title-close">close</div> -->
          </div>
        </div>
        <!-- ハンバーガー部分終わり -->
      </div>

  </header>
  <!-- スマホ版 375pxの場合のheader終了-->
  <?php get_template_part('common', 'header'); ?>