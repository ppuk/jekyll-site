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
npm run bower-install                   # It installs front-end libraries (Foundation, Jquery, ...)
npm run gulp                            # Minifies JS 
```

The repository can be cloned into any folder (doesn't need to be in `/var/www/`).

Run `npm run start` to start the Jekyll service. Once it's done compiling it'll serve on localhost: `http://127.0.0.1:4000`
