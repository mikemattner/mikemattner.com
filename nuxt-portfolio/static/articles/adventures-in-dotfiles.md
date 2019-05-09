I accidentally ran into a bit of laziness during my development process that turned into a productivity boon, and should prove to be absolutely essential during the setup of any new Mac I might purchase in the future.

Let me preface this by saying <strong>I am not</strong> a native of the command line--by any stretch. I find it to be cumbersome and annoying to remember commands and all of the possible flags that might apply to them. Even something as simple as showing hidden files on the Mac can be obnoxious:

```bash
# Show hidden files
--- ~ » defaults write com.apple.finder AppleShowAllFiles -bool true &amp;&amp; killall Finder

# Hide hidden files
--- ~ » defaults write com.apple.finder AppleShowAllFiles -bool false &amp;&amp; killall Finder</code></pre>
```

What if I could just type <code>show</code> or <code>hide</code> and be done with it? This is where aliases come in. This was a concept I was keenly aware of already--seeing that most of the helper plugins I used in my ZSH installation provide plenty of helpful aliases--but I figured, why not create some that I could use for operations I performed frequently? Or to find a way to easily navigate to directories I regularly used?

At first I created a simple <code>.aliases</code> file and started to add what I needed:

```bash
# Show/hide hidden files in Finder
alias show="defaults write com.apple.finder AppleShowAllFiles -bool true &amp;&amp; killall Finder"
alias hide="defaults write com.apple.finder AppleShowAllFiles -bool false &amp;&amp; killall Finder"

# Hide/show all desktop icons (useful when presenting)
alias hidedesktop="defaults write com.apple.finder CreateDesktop -bool false &amp;&amp; killall Finder"
alias showdesktop="defaults write com.apple.finder CreateDesktop -bool true &amp;&amp; killall Finder"

# Disable Spotlight
alias spotoff="sudo mdutil -a -i off"
# Enable Spotlight
alias spoton="sudo mdutil -a -i on"

#Git commands
alias gnb="git checkout -b"
alias gmsg="git commit -m"</code></pre>
```

I sourced it in my <code>.zshrc</code> file and called it good.

But then I wondered what would happen if I lost everything on this system? I started doing a little research and discovered that there were plenty of people working on ways to bootstrap their development environments for situations like this.

I found one particular <a href="https://github.com/mathiasbynens/dotfiles">repo</a> by Mathias that I was able to gather some items from, as well as an installation process that could get me started with everything I used. Now all I need to do is navigate to my cloned repo and type:

```bash
--- ~ » source boostrap.sh
```

I follow a few prompts and install what I need to get up and running. I can share my dev environment between machines fairly easily this way.

If you're interested, feel free to browse <a href="https://github.com/mikemattner/macos-system-setup">my repo</a> for reference, or fork it if you want to build on it. Keep in mind, there are more repos available with more sophisticated setups than my own if you're looking for something more robust, but if you're new to this level of customization, this is a good start.