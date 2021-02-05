// Testing
console.log('Working!');

/* First Plot */
//
// let trace1 = {
//     type: 'bar',
//     x: ["Mark", "Sarah", "Ellen", "Howard"],
//     y: [20, 10, 30, 40],
//     marker:
//     {
//         color: 'black',
//         line:
//         {
//             width: 2.3
//         }
//     }
// };
//
// //
// let data = [ trace1 ];
//
// let layout = {
//     title: 'Bar Chart',
//     font: {size: 18}
// };
//
// let config = {responsive: true}



/* Second plot*/
Plotly.d3.csv('/csvFile', function(err, rows){

    // Creating a function to unpack the loaded dataset
    function unpack(rows, key)
    {
        //
        return rows.map(function(row) { return row[key]; });
    }

    let HeadOffice = unpack(rows, 'Head Office');
    let Location = unpack(rows, 'Location');
    let cityLat = unpack(rows, 'latitude');
    let cityLong = unpack(rows, 'longitude');
    let color = [,"rgb(255,65,54)", "rgb(133,20,75)", "rgb(255,133,27)", "lightgrey"];
    let hoverText = [];
    let citySize = [];
    let scale = 50000;


    //
    for ( let i = 0; i < Location.length; i++ )
    {
        //
        // let currentSize = HeadOffice[i] / scale;
        let currentText = Location[i];
        hoverText.push(currentText);
    }

    // data section
    let my_data = [{
        type: 'scattermapbox',
        lat: cityLat,
        lon: cityLong,
        hoverinfo: 'text',
        text: hoverText,
        mode: 'markers',
        marker: {
            size: 10,
        }
    }];

    //
    let layout = {
        showlegend: false,
        dragmode: "zoom",
        mapbox: {
            bearing: 0,
            style: 'stamen-toner'   /* open-street-map, dark, stamen-watercolor, stamen-toner, stamen-terrain, carto-darkmatter*/
        },
        paper_bgcolor: '#191A1A',
        plot_bgcolor: '#191A1A',
        width: 500,
        height: 400,
        text: 'Source: <a href="https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh" style="color: rgb(255,255,255)">NASA</a>',
        margin: {
            l: 2,
            r: 2,
            b: 2,
            t: 2,
        pad: {
            l: 10,
            r: 10,
            b: 10,
            t: 10
        }
        },
        geo: {
            scope: 'nigeria',
            projection: {
                type: "nigeria"
            },
            showland: true,
            landcolor: 'rgb(247, 247, 247)',
            subunitwidth: 1,
            countrywidth: 1,
            subnitcolor: 'rgb(255, 255, 255)',
            countrycolor: 'rgb(255, 255, 255)',
            zoom: 5,
        },
    };

    //
    Plotly.newPlot("myDiv", my_data, layout, {showLink: false});
});



//
// Plotly.newPlot('myDiv', data, layout, config );
