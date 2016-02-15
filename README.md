# RHS Japan Club

Welcome to the GitHub Repository for the Roswell High School Japan Club. This readme will go over how to contribute to the website.

NOTE: This repository has a direct correlation to the actual website. Any changes made to this repository will result in that change being made on the club website as well.

## Getting Started

Before you do anything, ensure that you have the following:

- A GitHub account
- A Cloud9 account

If not, go ahead and make accounts for these services. Although Cloud9 is not necessary, it is a valuable asset to have.

### Forking the Repository

The powers of Git and GitHub allow us to ensure a reliable website. If you want to make changes to the website, then you must fork the repository first. This means that you will own your own version of the website, and can freely commit changes without affecting the master repository. Only when you feel that the changes are ready should you submit a **pull request**.

To fork this repository, look for the "Fork" button in the top right of this page and click it. You should then have your own version of the website on GitHub.

### Setting Up Your Workspace

Congratulations! You have your own forked version of the repository. By default, GitHub comes with a cool feature that allows you to edit files directly from inside GitHub. That's great for small things like typos, but if you plan to change a lot of material on the website, then you should set up a proper workspace.

#### With Your Own Computer

Setting up the workspace is pretty easy. Using your terminal of choice, navigate to the folder in which you keep all of your projects. Then, simply run:

```
git clone https://github.com/<YOUR USERNAME>/rhsjapan.github.io.git
```

Remember to replace `<YOUR USERNAME>` with your GitHub username. You should now be able to `cd` into the new folder and start making changes!

#### With Cloud9

With Cloud9, it's even easier. Log in to your account, then create a new workspace. Although the workspace name and description aren't of importance, it would be helpful to name it something like `RHSJapan`.

Under the section that says "Clone from Git or Mercurial URL", paste the following url:

```
https://github.com/<YOUR USERNAME>/rhsjapan.github.io.git
```

Of course, you have to replace `<YOUR USERNAME>` with your GitHub username. The hosted workspace can either be public or private. Do not change the template. It should be on custom. Then, press "Create Workspace".

#### Setting Up Sync

Now that you have your own version of the master repository, you need to make sure that you can receive updates from it. Simply run:

```
git remote add upstream https://github.com/RHSJapan/rhsjapan.github.io.git
```

To create a new "remote" that you can get updates from.

You should now be able to work with your own version of the Japan Club website.

## Making Posts

### With new_post.rb

To make a new post is fairly simple. I have made a ruby script called `new_post.rb` that will guide you through the process.

1. Open your Cloud9 distribution. Make sure to `git pull upstream master` to grab the latest changes from GitHub.
2. Press `Alt+T`, that's `Alt` and `T` simultaneously, to bring up a new terminal.
3. Type the following line into the terminal and press enter:

```
ruby _tools/new_post.rb
```

You will then be asked to answer several prompts from within the terminal.

Please note that all posts are written in the [Markdown](https://daringfireball.net/projects/markdown/) language.

Once you finish the post, you should **push** the new post to your forked repository and make a **pull request**. Another Japan Club officer will review the post and make changes to it as necessary until it is ready to be pushed to the **master repository**.

Note that this post will not be available to on the official website until you submit a Pull Request and it is reviewed and accepted by another officer of the Japan Club.

### Manual Creation

To manually create posts for the website, you first have to "configure" the file in a specific way. Failing to do so may result in site inconsistencies.

#### File structure

All post files must follow the following format:

```
YYYY-MM-DD-title.md
```

Where `YYYY` represents the 4-digit year, `MM` represents the 2-digit month, `DD` represents the 2-digit date, and `title` represents the title of the actual post.

Please do NOT put spaces where the title should be. Instead, use **lowercase** letters and **dashes** where spaces should be. Do not use any special characters, that is, try to keep the title string to letters and dashes only.

#### Front Matter

The front matter for a post is pretty straight-forward. Please copy/paste this template to the **top** of the markdown file:

```
---
layout: post
title: "Hello Japan!"
date: 2099-12-31
authors: []
categories: news
---
```

Then, replace the `title` field with your post title. Remember to keep the quotes! Change the date and category as needed, keeping the format in which they're written. Then, for the authors, use the syntax `firstname_lastname`. For example, if Donovan was the author of a post, then you'd write `donovan_glover`. Remember to separate different authors by a comma (`,`) and keep the square brackets when adding authors.

You're now ready to start writing content for the blog post!

## Previewing Changes

With the power of Jekyll, you can preview your changes live on a server.

### With Your Own Computer

Ensure that you already have Ruby and the Jekyll gem installed. Open up your terminal and type the following:

```
jekyll serve
```

If all goes well, you should be able to navigate your browser to `127.0.0.1:4000` and see the club website.

### With Cloud9

Using Cloud9, it is possible to run a server directly from within the browser. This is useful if you want to preview the changes at school, or you're having difficulties using Ruby.

1. Use the keyboard shortcut `Alt+T` to open a new terminal.
2. Type `jekyll serve --host $IP --port $PORT --baseurl ''` into the terminal and press enter.
3. If all goes well, you should be able to navigate to your project's Cloud9 url and see the club website.

Keep in mind that these changes are local and are NOT submitted until your submitted **pull request** is accepted by another officer of the Japan Club.

## Pushing Changes

Pushing your changes back to the official website is the same for both your own computer and in Cloud9. First, you need to update your forked repository, and then submit a pull request to the master repository

### Query the Master Repository

If it's been a long time since you forked the repository, you may want to check for updates before you push the code to your GitHub repository. This will help the pull request get accepted faster. In a terminal, type:

```
git fetch upstream
git checkout master
git rebase upstream/master
```

### Pushing to Your Forked Repository

Next, you have to **add**, **commit**, and then **push** your changes.

```
git add --all # Adds all of the changes you made
git commit -m "<REPLACE THIS WITH YOUR COMMIT MESSAGE>"
git push -f origin master
```

Now your GitHub repository should have been updated.

### Making a Pull Request

The final step is to make a pull request so that other officers of the Japan Club can review the changes you made and finally update the official website.

1. Navigate to the "Pull Requests" tab at the top of this page.
2. Click the "New Pull Request" button.
3. Follow the instructions provided by GitHub.

If all goes well, you should see your pull request in the master repository! When the pull request is "merged", your changes will be seen on the official site!
