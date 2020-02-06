import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AmapMarkerClustererDirective } from 'ngx-amap';
declare const require: any; // DEMO IGNORE

@Component({
  selector: 'demo-amap-marker-cluster-methods',
  templateUrl: './demo-amap-marker-cluster-methods.component.html',
  styleUrls: ['./demo-amap-marker-cluster-methods.component.scss'],
})
export class DemoAmapMarkerClusterMethodsComponent implements OnInit {
  html = require('!!html-loader!./demo-amap-marker-cluster-methods.component.html'); // DEMO IGNORE
  component = require('!!raw-loader!./demo-amap-marker-cluster-methods.component.ts').default; // DEMO IGNORE
  markers = [
    ['113.864691', '22.942327'],
    ['113.370643', '22.938827'],
    ['112.985037', '23.15046'],
    ['110.361899', '20.026695'],
    ['121.434529', '31.215641'],
    ['120.682502', '28.011099'],
    ['126.687123', '45.787618'],
    ['103.970724', '30.397931'],
    ['117.212164', '31.831641'],
    ['121.411101', '31.059407'],
    ['104.137953', '30.784276'],
    ['120.499683', '30.042305'],
    ['108.94686', '34.362975'],
    ['112.873295', '22.920901'],
    ['113.373916', '23.086728'],
    ['113.250159', '23.075847'],
    ['116.675933', '39.986343'],
    ['120.75997', '31.734934'],
    ['118.314741', '32.26999'],
    ['111.723311', '34.771838'],
    ['119.537126', '26.200017'],
    ['113.830123', '23.00734'],
    ['119.273795', '26.060002'],
    ['116.466752', '39.951042'],
    ['114.20716', '22.777829'],
    ['126.118338', '45.11481'],
    ['116.366324', '39.781077'],
    ['120.377998', '31.578216'],
    ['116.611935', '23.66941'],
    ['103.787344', '30.940037'],
    ['112.911223', '23.164952'],
    ['121.946335', '39.403784'],
    ['120.172545', '36.009391'],
    ['126.609854', '45.722514'],
    ['120.531699', '32.402873'],
    ['118.914313', '32.013572'],
    ['126.597762', '45.739299'],
    ['106.540999', '29.520217'],
    ['114.033057', '22.733424'],
    ['104.041129', '30.598338'],
    ['119.917693', '32.484184'],
    ['118.371124', '35.082682'],
    ['120.926368', '31.320681'],
    ['120.355238', '31.557524'],
    ['101.775209', '36.614975'],
    ['114.499404', '34.646022'],
    ['118.087516', '24.474988'],
    ['104.638952', '30.1253'],
    ['116.492237', '39.991802'],
    ['112.898903', '32.04371'],
    ['114.104018', '22.626803'],
    ['119.969664', '30.26186'],
    ['119.530013', '39.935889'],
  ];

  constructor(private msg: NzMessageService) {}

  ngOnInit() {}

  getMethods(p: AmapMarkerClustererDirective) {
    if (p) {
      this.msg.info('请查看 console 输出');
      p.get().subscribe(v => {
        console.log('getClustersCount():', v.getClustersCount());
        console.log('getGridSize():', v.getGridSize());
        console.log('getMarkers():', v.getMarkers());
        console.log('getMaxZoom():', v.getMaxZoom());
        console.log('getMinClusterSize():', v.getMinClusterSize());
        console.log('getStyles():', v.getStyles());
        console.log('getMap():', v.getMap());
      });
    }
  }
}
