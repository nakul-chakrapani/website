// create an array with nodes
var EDGE_LENGTH = 150;

var nodes = new vis.DataSet([
    {id: 1, group: 'Me', shape: 'circularImage', image: 'images/nakul.jpg'},
    {id: 2, group: 'AboutMe', label: 'About Me'},
    {id: 3, group: 'WorkExperience', label: 'Work Experience'},
    {id: 4, group: 'Education', label: 'Education'},
    {id: 5, group: 'Projects', label: 'Projects'},
    {id: 6, group: 'RightNow', label: 'What I am doing right now'}
]);

// create an array with edges
var edges = new vis.DataSet([
    {from: 1, to: 2, length: EDGE_LENGTH},
    {from: 1, to: 3, length: EDGE_LENGTH},
    {from: 1, to: 4, length: EDGE_LENGTH},
    {from: 1, to: 5, length: EDGE_LENGTH},
    {from: 1, to: 6, length: EDGE_LENGTH},
]);

// create a network
var container = document.getElementById('mynetwork');

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};
var options = {
  autoResize: true,
  height: '100%',
  width: '100%',
  groups: {
    Me: {
      size: 60
    },
    AboutMe: {
      shape: 'icon',
      icon: {
        face: 'FontAwesome',
        code: '\uf007',
        size: 60
      }
    },
    WorkExperience: {
      shape: 'icon',
      icon: {
        face: 'FontAwesome',
        code: '\uf0b1',
        size: 60
      }
    },
    Education: {
      shape: 'icon',
      icon: {
        face: 'FontAwesome',
        code: '\uf19c',
        size: 60
      }
    },
    Projects: {
      shape: 'icon',
      icon: {
        face: 'FontAwesome',
        code: '\uf121',
        size: 60
      },
    },
    RightNow: {
      shape: 'icon',
      icon: {
        face: 'FontAwesome',
        code: '\uf0e7',
        size: 60
      }
    },
  },
  physics:{
      barnesHut:{gravitationalConstant:-30000},
      stabilization: {iterations:1000}
  },
  nodes: {
    font: {
      color: '#BCBCBC',
      size: 15,
    }
  }

}

// initialize your network!
var network = new vis.Network(container, data, options);
