<template>
  <div class="app">
    <div class="header">
      <div class="logo">LiuWill</div>
      <div class="navibar">
        <div class="nav-item">Ideas</div>
        <div class="nav-item">Design</div>
        <div class="nav-item">Engineer</div>
      </div>
    </div>
    <div class="topic">
      <div class="scrollable">
        <h3>My Concern</h3>
        <div class="topic-list">
          <div class="flag flag--xsmall red--bg"><span>Lambda</span></div>
          <div class="flag flag--xsmall green--bg"><span>Mathematics</span></div>
          <div class="flag flag--xsmall purple--bg"><span>Algorithm</span></div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="artical">
        <div class="article-header">
          <div class="flag flag--xsmall red--bg"><span>Map Reduce</span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
module.exports = {
  data: function() {
    return {
      nane: "hello"
    };
  }
};
</script>
<style scoped>
  .app {
    font: 100%/1.4 Guardian, open-sans, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  .header {
    color: #fff;
    background-color: #d3002d;

    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 2.75rem;
    box-shadow: 0 0 5px rgba(115, 115, 115, 0.8),
      0 2px 6px rgba(115, 115, 115, 0.7);
  }
  .logo {
    font-size: 1.6em;
    margin: 0.67em 0;
    display: inline-block;
    vertical-align: middle;
    float: left;
    position: relative;
    z-index: 600;
    height: 2.75rem;
    width: 9.2125rem;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 10px;
    margin-right: 40px;

    line-height: 2.75rem;
  }
  .navibar {
    max-width: 1390px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;

    padding: 0 3.125rem;
    color: #fff;
    background-color: #d3002d;
  }
  .nav-item {
    font-family: oreilly-urw-typewriter-narro, monospace, serif;
    letter-spacing: 0.03em;
    position: relative;
    pointer-events: all;
    cursor: pointer;
    color: #fff;
    text-align: left;
    text-shadow: 0 1px 2px #999;
    display: inline-block;
    font-size: 1.375rem;
    height: 2.75rem;
    margin-right: 40px;
    line-height: 2.75rem;
  }
  .nav-item:before,
  .nav-item:after {
    -webkit-transition: width 0.25s cubic-bezier(0.86, 0, 0.07, 1);
    transition: width 0.25s cubic-bezier(0.86, 0, 0.07, 1);
    content: "";
    z-index: -1;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 4px;
    width: 0%;
  }
  .nav-item:before {
    background: #fff;
  }
  .nav-item:after {
    background: #e6e6e6;
  }
  .nav-item:hover:after {
    width: 100%;
    z-index: 0;
  }

  .topic {
    background: #f5f5f5;
    -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.05);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.05);

    position: relative;
    z-index: 300;
    overflow: hidden;
    padding: 0.5rem 0 0.375rem;
  }
  .topic .scrollable {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 40px;
    margin-bottom: -40px;
  }
  .topic h3 {
    -webkit-font-smoothing: antialiased;
    text-transform: uppercase;
    font-size: 0.8125rem;
    letter-spacing: 0.05em;
    float: left;
    margin: 0.4375rem 0 0 0;
    padding-left: 0.625rem;
    width: 11.7125rem;
  }
  .topic-list {
    max-width: 1390px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0.3125rem;
    white-space: nowrap;
  }
  .flag {
    background-color: #f5f5f5;
    display: inline-block;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
    margin-bottom: 0.75rem;
    cursor: pointer;
  }
  .topic .flag {
    background: #fff;
    margin-bottom: 0;
    margin-right: 1.25rem;
  }
  .flag span {
    display: inline-block;
    padding: 0.5625rem 0.625rem 0.3125rem 1.125rem;
    position: relative;
    z-index: 5;
    color: #404040;
    -webkit-transition: color 0.25s cubic-bezier(0.86, 0, 0.07, 1);
    transition: color 0.25s cubic-bezier(0.86, 0, 0.07, 1);
  }
  .flag:before {
    content: "";
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 0.5625rem;
    z-index: 0;
    -webkit-transition: width 0.25s cubic-bezier(0.86, 0, 0.07, 1);
    transition: width 0.25s cubic-bezier(0.86, 0, 0.07, 1);
  }
  .flag:hover span {
    color: #fff;
  }
  .flag:hover:before {
    width: 100%;
  }
  .flag--xsmall {
    font-size: 0.6875rem;
  }

  .red--bg:before {
    background-color: #d3002d !important;
  }
  .green--bg:before {
    background-color: #008a96 !important;
  }
  .purple--bg:before {
    background-color: #57567d !important;
  }

  .main {
    max-width: 1390px;
    margin-left: auto;
    margin-right: auto;
    background-color: #fff;

    overflow: hidden;
    padding: 0 2.5rem;
  }
  .article-header {
    width: 97.22222%;
    float: left;
    margin-left: 1.38889%;
    margin-right: 1.38889%;
    margin-top: 2.5rem;
    border-bottom: 1px solid #ededed;
    padding-bottom: 1.25rem;
    margin-bottom: 1.25rem;
  }
</style>

