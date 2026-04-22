# Project Vision Transcript

> This is the original vision transcript from Sonic (project lead) describing the no-code platform.

---

## What We're Building

A no-code platform for users that do not have any coding experience.

### How It Works

A user will come to our site and say, "I want this, I want that." There will be an AI agent that is going to look into our components that we have. The purpose of this project is to build all possible components that anybody that wants to build a site can have.

If the user comes to the site and says, "Okay, I want an e-commerce that sells bags or shoes," the AI agent is just going to look into our components and select the necessary components that match the styles of what the user wants.

### Component Library

We are going to build tens of thousands of components. That is why we bought the Max Claude Plan. We have images for all possible images for those hero sections, a lot of things, all possible scenarios that any website wants to build, anything that they want to build, all possible scenarios. The components will be ready to achieve.

Starting now, it is going to be a free-to-use site; everything is completely free, but as time goes on, we can decide to make some components a pro plan that we have to pay for. On our site there is going to be an animations component, everything.

### Editor Features

After a user tells "this is what I want," there will be features in the editor whereby the user can change the color that is currently showing: the primary color, the secondary color, or whatever color it is displaying.

### Mobile First

This is going to be mobile friendly because our targeted users are people that are using phones. They are Africans that cannot afford computers, especially those Ghana people. They only have phones to use for building their site. It must be mobile friendly.

### Preview System

While the AI has joined the components to build the site according to the user's prompt, there will be a preview link. The preview link will show the current preview of what has been built, with all possible components, the admin dashboard layout component, and everything.

There's going to be a preview link to see the current editor of what they are editing. In the preview link, it's going to show the name of our site. Currently, we don't have the site name or our app name, so currently we are using "nocode." It's going to have our site name, the name of the website the user is building, just like all those preview links of those no-code platforms.

### Watermark

There will be a watermark in the preview stuff, so that even if they share the link, they can see, "Okay, this site has been built by this company or this website."

### Domain System

We will give them a fake domain, which is just the preview link (like a test mode). From our site, you can purchase a domain — probably we are going to attach some API so that people can purchase a domain from the site.

### Publishing Flow

Since we are not connected to GitHub or anything that is going to host the site, when they click on the "Publish" button, we are going to get a notification in our admin dashboard. For now, we are going to host the site for them manually. That's how we are going to be doing it for now, as a startup.

Maybe when we get bigger, we are probably going to connect with some big brands, like GitHub, maybe Netlify or similar services. For now, we are hosting manually.

### Admin Dashboard

We are going to have a very big admin dashboard — this might actually be the biggest admin dashboard — whereby we can see all the tools and components. There will be a filter system to make things easier for us to use. There will be a method whereby we can make a component pro.

### Database

For this kind of project, if we need a database (which we do), we are going to use Supabase.

---

## Team & Branching Strategy

This project is built by two developers:
- **Sonic** (project lead)
- **Dax** (junior developer)

### Five Branches:
1. **main** — Production
2. **staging** — Safety layer before main
3. **testing** — Integration testing for both devs
4. **sonic** — Sonic's working branch
5. **dax** — Dax's working branch

### Workflow:
- Both devs work on their personal branches (sonic / dax)
- When a feature is done, push to the **testing** branch
- For features that need both devs' work: both push to testing, test together
- For features one dev can test alone: test on personal branch first
- After testing passes → push to **staging** → then to **main**
- All five branches stay synced after each release cycle
