# pirateparty.org.uk

This project is deprecated and is now a holding page for the defunct Pirate Party UK.

Most former party content will be removed from the site, you can check out the `archive` branch to see more of the old content

This project is copied from [pirati.cz](https://github.com/pirati-web/pirati.cz)

## Build locally

To install on **Fedora 25+**: `dnf install cmake gcc npm ruby ruby-devel rubygem-jekyll rubygem-bundler rubygem-nokogiri libffi zlib`

To install on **Ubuntu 16.04 LTS** (including Ubuntu running on Windows Subsystem for Linux on **Windows 10**):

```bash
sudo apt-get install ruby2.3-dev gcc make libghc-zlib-dev libffi-dev npm
gem install rubygems-update
gem install jekyll bundler
sudo npm install -g bower
sudo npm install --global gulp-cli
```

*(on all operating systems)*:

Next, go to the cloned project folder:

```bash
npm install                             # It installs gulp etc.
bundle install                          # It installs locally needed gems (např. jekyll, jekyll-paginate etc.)
./node_modules/bower/bin/bower install  # It installs front-end libraries (Foundation, Jquery, ...)
./node_modules/gulp/bin/gulp.js         # Minifies JS 
```

The repository can be cloned into any folder (doesn't need to be in `/var/www/`).

Run `bundle exec jekyll serve`, which compiles the page and runs the page. It'll be accessible on localhost: `http://127.0.0.1:4000`

## Structure

The pages themselves are in markdown or in html (more complex structure, eg multiple columns, etc.)

The collections are markdown files with the yaml header in the appropriate folder, 4:

- posts (articles), photo 1300x744
- people (people), photo 165x220
- program

Some data are listed in the folder `_data`. They are in yaml or json format.

**CSS** is in the folder `_sass` and is automatically compiled and minified into one file `main.css`.

**JavaScript** is in the folder `_include/js`. Libraries are defined in `bower.json` and the production set is made up of a gulp.

Jekyll has very detailed [documentation](http://jekyllrb.com/docs/home/). And we also recommend the development [cheat sheet](http://jekyll.tips/jekyll-cheat-sheet/)
