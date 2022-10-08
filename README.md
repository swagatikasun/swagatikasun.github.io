# CS-Portfolio

A simple to use portfolio template for students.

# Deployment and Configuration

For deploying, first fork the repository with the `main` branch of this repository. Next, modify the following configurations based on your needs:

1. Modify `homepage` config in `package.json`. If you're hosting on the root of your domain, i.e. `username.github.io`, then leave it blank, something like `"homepage": "",` or you can completely remove the property.

2. Now move to the `public` directory of the repository, and configure all the required information for the portfolio website.

    1. Modify all `.json` and `.md` files in the `data` directory.
    2. Update the `static/img/profile.jpg` with your photo. NOTE: The photo should be of the aspect ratio of 1:1.
    3. Change the `REACT_APP_NAME` in `.env` to your name, just like you did in `bio.json`.

3. Once all of these are done, go to your repository's settings, then **Pages**, and set GitHub Pages to the `gh-pages` branch, and select the root directory to serve the content from.

4. With these 3 steps, you're done! Now visit the designated URL to view your portfolio website.
