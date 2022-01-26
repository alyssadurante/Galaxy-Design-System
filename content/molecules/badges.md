---
title: "Badges"
subtitle: "A badge is a label to visually organize items"
metaTitle: "Galaxy Design System | Molecules: Badges"
metaDescription: "This is the meta description for this page"
---

# Usage

Use badges to label, categorize, or organize items using keywords that describe them.

#### When to use
- As a method of filtering data, to show only items within that particular category.
- When content is mapped to multiple categories, and the user needs a way to differentiate between them.
- As indicators of growth, i.e. increase/decrease in metrics. 

# Variants

There are two variants of badges with classes ```rounded-full``` and ```rounded```. 

```rounded-full```

Use this variant (class) for indicator badges. These can be found in <a href="">metric cards</a>. 
<img src="https://res.cloudinary.com/dgcfg5cwe/image/upload/v1643163579/Metric_zv07sk.svg"></img>

```rounded```

Use this variant (class) for Explore, both **Guided** and **Natural Language** views.
<img src="https://res.cloudinary.com/dgcfg5cwe/image/upload/v1643158257/Accordion_Open_otxn0n.svg"></img>
<img src="https://res.cloudinary.com/dgcfg5cwe/image/upload/v1643158257/Accordion_Collapsed_j7wgue.svg"></img>
<img src="https://res.cloudinary.com/dgcfg5cwe/image/upload/v1643163940/badges-NL_orblv3.svg"></img>

# Code 

#### Basic Badges

```javascript react-live=true
() =>{
  return (
    <>
      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
        Badge
      </span>
      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
        Badge
      </span>
      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
        Badge
      </span>
      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
        Badge
      </span>
      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
        Badge
      </span>
      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
        Badge
      </span>
      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
        Badge
      </span>
      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
        Badge
      </span>
    </>
  )
}
```

#### Rounded Badges

```javascript react-live=true
() =>{
  return (
    <>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
        Badge
      </span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-100 text-red-800">
        Badge
      </span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800">
        Badge
      </span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
        Badge
      </span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800">
        Badge
      </span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800">
        Badge
      </span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-purple-100 text-purple-800">
        Badge
      </span>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-pink-100 text-pink-800">
        Badge
      </span>
    </>
  )
}
```