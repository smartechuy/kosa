kosa
====
use cases
=========

technologies
============
-JEE
-Openlayers
-Postgres
-Postgis
-GeoServer?
-GeoJSF Alpha?
-Hibernate Spatial?

arch
====
-Core and Presentation
    JEE EAR application
        HTML, OpenLayers
        JSF
        EJB
        Hibernate
-GIS Server
    GeoServer
-DB
    Postgres + Postgis

simple
======
-OpenLayers serve a WFS layer
-WFS Layer hosted in GeoServer and pointing to a Postgis DB

db
==
Articles
    Name
    Description
    Authors
    Year

user stories
============

Login
-----
1)Login
2)Show the Uruguay map

Simple article research urom map
--------------------------------
1)Show the Uruguay map with polygons above
2)Click one polygon
3)Show a list of articles related to the polygon
