$(document).ready(function () {
  /* Interactive maps with users */
  $("path").click(function (e) {
    switch ($(e.target).index()) {
      case 0:
        $("path").css({ fill: "#bebebe" });
        $("#region-1").css({
          fill: "rgb(111, 216, 254)",
          stroke: "rgb(253, 253, 253)",
          "pointer-events": "all",
        });
        $("#list-regions")
          .children("li")
          .css({ "background-color": "#d3d3d33b" });
        $("#list-regions")
          .children("li:nth-child(1)")
          .css({ "background-color": "lightblue" });
        break;
      case 1:
        $("path").css({ fill: "#bebebe" });
        $("#region-2").css({
          fill: "rgb(51, 230, 99)",
          stroke: "rgb(253, 253, 253)",
          "pointer-events": "all",
        });
        $("#list-regions")
          .children("li")
          .css({ "background-color": "#d3d3d33b" });
        $("#list-regions")
          .children("li:nth-child(2)")
          .css({ "background-color": "lightblue" });
        break;
      case 2:
        $("path").css({ fill: "#bebebe" });
        $("#region-3").css({
          fill: "rgb(224, 110, 127)",
          stroke: "rgb(253, 253, 253)",
          "pointer-events": "all",
        });
        $("#list-regions")
          .children("li")
          .css({ "background-color": "#d3d3d33b" });
        $("#list-regions")
          .children("li:nth-child(4)")
          .css({ "background-color": "lightblue" });
        break;
      case 3:
        $("path").css({ fill: "#bebebe" });
        $("#region-4").css({
          fill: "rgb(225, 233, 81)",
          stroke: "rgb(253, 253, 253)",
          "pointer-events": "all",
        });
        $("#list-regions")
          .children("li")
          .css({ "background-color": "#d3d3d33b" });
        $("#list-regions")
          .children("li:nth-child(3)")
          .css({ "background-color": "lightblue" });
        break;
      case 4:
        $("path").css({ fill: "#bebebe" });
        $("#region-5").css({
          fill: "rgb(184, 70, 70)",
          stroke: "rgb(253, 253, 253)",
          "pointer-events": "all",
        });
        $("#list-regions")
          .children("li")
          .css({ "background-color": "#d3d3d33b" });
        $("#list-regions")
          .children("li:nth-child(6)")
          .css({ "background-color": "lightblue" });
        break;
      case 5:
        $("path").css({ fill: "#bebebe" });
        $("#region-6").css({
          fill: "rgb(11, 114, 159)",
          stroke: "rgb(253, 253, 253)",
          "pointer-events": "all",
        });
        $("#list-regions")
          .children("li")
          .css({ "background-color": "#d3d3d33b" });
        $("#list-regions")
          .children("li:nth-child(5)")
          .css({ "background-color": "lightblue" });
        break;
      case 6:
        $("path").css({ fill: "#bebebe" });
        $("#region-7").css({
          fill: "rgb(234, 174, 7)",
          stroke: "rgb(253, 253, 253)",
          "pointer-events": "all",
        });
        $("#list-regions")
          .children("li")
          .css({ "background-color": "#d3d3d33b" });
        $("#list-regions")
          .children("li:nth-child(8)")
          .css({ "background-color": "lightblue" });
        break;
      case 7:
        $("path").css({ fill: "#bebebe" });
        $("#region-8").css({
          fill: "rgb(149, 45, 223)",
          stroke: "rgb(253, 253, 253)",
          "pointer-events": "all",
        });
        $("#list-regions")
          .children("li")
          .css({ "background-color": "#d3d3d33b" });
        $("#list-regions")
          .children("li:nth-child(7)")
          .css({ "background-color": "lightblue" });
        break;
      case 8:
        $("path").css({ fill: "#bebebe" });
        $("#region-9").css({
          fill: "rgb(243, 215, 8)",
          stroke: "rgb(253, 253, 253)",
          "pointer-events": "all",
        });
        $("#list-regions")
          .children("li")
          .css({ "background-color": "#d3d3d33b" });
        $("#list-regions")
          .children("li:nth-child(10)")
          .css({ "background-color": "lightblue" });
        break;
      case 9:
        $("path").css({ fill: "#bebebe" });
        $("#region-10").css({
          fill: "rgb(189, 30, 217)",
          stroke: "rgb(253, 253, 253)",
          "pointer-events": "all",
        });
        $("#list-regions")
          .children("li")
          .css({ "background-color": "#d3d3d33b" });
        $("#list-regions")
          .children("li:nth-child(11)")
          .css({ "background-color": "lightblue" });
        break;
      case 10:
        $("path").css({ fill: "#bebebe" });
        $("#region-11").css({
          fill: "rgb(173, 219, 23)",
          stroke: "rgb(253, 253, 253)",
          "pointer-events": "all",
        });
        $("#list-regions")
          .children("li")
          .css({ "background-color": "#d3d3d33b" });
        $("#list-regions")
          .children("li:nth-child(12)")
          .css({ "background-color": "lightblue" });
        break;
      case 11:
        $("path").css({ fill: "#bebebe" });
        $("#region-12").css({
          fill: "rgb(225, 70, 3)",
          stroke: "rgb(253, 253, 253)",
          "pointer-events": "all",
        });
        $("#list-regions")
          .children("li")
          .css({ "background-color": "#d3d3d33b" });
        $("#list-regions")
          .children("li:nth-child(9)")
          .css({ "background-color": "lightblue" });
        break;
    }
  });

  /* click item list right */
  $("#list-regions").click(function (e) {
    $(this).children("li").css({ "background-color": "#d3d3d33b" });
    $(event.target).css({ "background-color": "lightblue" });
    console.log($(event.target).index());
    get_region($(event.target).index());
  });
  function get_region(nb_region) {
    switch (nb_region) {
      case 0:
        $("path").css({ fill: "#bebebe" });
        $("#region-1").css({
          fill: "rgb(111, 216, 254)",
          stroke: "rgb(253, 253, 253)",
          "pointer-events": "all",
        });

        break;
      case 1:
        $("path").css({ fill: "#bebebe" });
        $("#region-2").css({
          fill: "rgb(51, 230, 99)",
          stroke: "rgb(253, 253, 253)",
          "pointer-events": "all",
        });
        break;
      case 2:
        $("path").css({ fill: "#bebebe" });
        $("#region-4").css({
          fill: "rgb(225, 233, 81)",
          stroke: "rgb(253, 253, 253)",
          "pointer-events": "all",
        });
        break;
      case 3:
        $("path").css({ fill: "#bebebe" });
        $("#region-3").css({
          fill: "rgb(224, 110, 127)",
          stroke: "rgb(253, 253, 253)",
          "pointer-events": "all",
        });
        break;
      case 4:
        $("path").css({ fill: "#bebebe" });
        $("#region-6").css({
          fill: "rgb(11, 114, 159)",
          stroke: "rgb(253, 253, 253)",
          "pointer-events": "all",
        });
        break;
      case 5:
        $("path").css({ fill: "#bebebe" });
        $("#region-5").css({
          fill: "rgb(184, 70, 70)",
          stroke: "rgb(253, 253, 253)",
          "pointer-events": "all",
        });
        break;
      case 6:
        $("path").css({ fill: "#bebebe" });
        $("#region-8").css({
          fill: "rgb(149, 45, 223)",
          stroke: "rgb(253, 253, 253)",
          "pointer-events": "all",
        });
        break;
      case 7:
        $("path").css({ fill: "#bebebe" });
        $("#region-7").css({
          fill: "rgb(234, 174, 7)",
          stroke: "rgb(253, 253, 253)",
          "pointer-events": "all",
        });
        break;
      case 8:
        $("path").css({ fill: "#bebebe" });
        $("#region-12").css({
          fill: "rgb(225, 70, 3)",
          stroke: "rgb(253, 253, 253)",
          "pointer-events": "all",
        });
        break;
      case 9:
        $("path").css({ fill: "#bebebe" });
        $("#region-9").css({
          fill: "rgb(243, 215, 8)",
          stroke: "rgb(253, 253, 253)",
          "pointer-events": "all",
        });
        break;
      case 10:
        $("path").css({ fill: "#bebebe" });
        $("#region-10").css({
          fill: "rgb(189, 30, 217)",
          stroke: "rgb(253, 253, 253)",
          "pointer-events": "all",
        });
        break;
      case 11:
        $("path").css({ fill: "#bebebe" });
        $("#region-11").css({
          fill: "rgb(173, 219, 23)",
          stroke: "rgb(253, 253, 253)",
          "pointer-events": "all",
        });
        break;
    }
  }
});
