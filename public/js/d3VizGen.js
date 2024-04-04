function drawTriangle(elementId, S1, S2, S3) {
    
    const maxSideLength = Math.max(S1, S2, S3);
    

    //scale sides
    const sideScaler = d3.scaleLinear().domain([0, maxSideLength]).range([20, 200]);
    const side1 = sideScaler(S1);
    const side2 = sideScaler(S2);
    const side3 = sideScaler(S3);

    // Calculate coordinates of the vertices based on the given side lengths
        const x1 = 100;
        const y1 = 100;
        const x2 = x1 + side1;
        const y2 = y1;
        const x3 = (Math.pow(side2, 2) - Math.pow(side3, 2) + Math.pow(side1, 2)) / (2 * side1) + x1;
        const y3 = Math.sqrt(Math.pow(side2, 2) - Math.pow((x3 - x1), 2)) + y1;

        // Create an array of vertices
        const vertices = [
            [x1, y1],
            [x2, y2],
            [x3, y3]
        ];

        // Create SVG element
        d3.select(`#${elementId}`).selectAll("*").remove();
        const svg = d3.select(`#${elementId}`).append("svg").attr("height", 400).attr("width", 400);

        // Draw the triangle
        svg.append("polygon")
            .attr("points", vertices.map(d => d.join(",")).join(" "))
            .attr("fill", "lightblue")
            .attr("stroke", "black")
            .attr("stroke-width", 1);
    }