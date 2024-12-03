# maps

## secondapp

* This will be a basic web application using parcel
  * randomly generate a user.
  * randomly generate a company.
  * company will have a longitude and latitude
  * With the result showing these points on a map.

* src folder will contain
  * index.ts
    * Map.ts
    * User.ts
    * Company.ts

[Faker-js](https://fakerjs.dev/api/) will be used to create random user data.

### Google Maps

#### Using a pre-generated api key

If you do not have a credit card tied to your Google account, or do not want to add one, then please use this pre-generated API key instead:

`AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU`

or you can get a new google developer project and create a api key and added as a script tag.

#### type definitions

We need to install a types definition library:

npm install @types/google.maps

Also, you will still see a TS error in your code editor:

Cannot find name 'google'.ts(2304)

As the very first line in the index.ts file, you will need to add a triple slash directive:

    /// <reference types="@types/google.maps" />

You can read about this in the official docs here:

<https://developers.google.com/maps/documentation/javascript/using-typescript#Module_Import>

#### maps script tag, style.css and initMap (as of Dec 2024)

```html
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU&loading=async&libraries=maps,markers&v=beta" defer></script>
```

```ts
let map: google.maps.Map;
async function initMap(): Promise<void> {
  const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  map = new Map(document.getElementById("map") as HTMLElement, {
    zoom: 1,
    center: { 
      lat: 0, 
      lng: 0
    },
  });
}

initMap();
```

needed basic css for map height

```css
/* Always set the map height explicitly to define the size of the div
 * element that contains the map. */
#map {
  height: 100%;
}

/* Optional: Makes the sample page fill the window. */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
```
