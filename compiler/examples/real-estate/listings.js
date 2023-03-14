// libraries
const Project = require("../../src/index").Project;
const SSV = require("../../src/template-api/SSV").SSV;
const renderers = require("./renderers");

// construct a project
var p = new Project("real_estate", "../../../config.txt");
p.addRenderingParams(renderers.renderingParams);
p.addStyles("listings.css");

// set up ssv
var query ="select * from listings;";

var ssv = {
    data: {
        db: "real_estate",
        query: query
    },
    layout: {
        x: {
            field: "x",
            extent: [0, 180]
        },
        y: {
            field: "y",
            extent: [-90, 90]
        },
        z: {
            field: "area",
            order: "desc"
        },
        overlap: 1,
    },
    marks: {
        cluster: {
            mode: "custom",
            custom: renderers.smallClusterRender,
            config: {
                bboxW: 1,
                bboxH: 1
            }
        },
        hover: {
            rankList: {
                mode: "custom",
                fields: ["name", "address", "image", "price", "area"],
                custom: renderers.customHover,
                topk: 1,
                config: {
                  bboxW: 500,
                  bboxH: 10
                }
            },
            selector: "*",
            boundary: "convexhull"
        }
    },
    config: {
        axis: true,
        numLevels: 15,
    }
};

p.addSSV(new SSV(ssv));
p.saveProject();
