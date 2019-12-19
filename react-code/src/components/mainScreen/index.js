import React, { Component } from 'react'
import * as THREE from 'three'
//备用
import Orbitcontrols from 'three-orbitcontrols'
import { render } from 'react-dom'
export default class MainScreen extends Component {
    componentDidMount() {
        this.init()
    }
    
    init = () => {
        //创建相机
        this.camera = new THREE.PerspectiveCamera( 45, this.mount.clientWidth / this.mount.clientHeight, 1, 10000 );
        this.camera.position.set( 500, 800, 1300 );
        this.camera.lookAt( 0, 0, 0 );
        //创建场景
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0xf0f0f0 );

        this.raycaster = false
        this.isShiftDown = false

        this.objects = [];

        this.initBasic();
        this.render();
    }

    initBasic = ()=>{
        // roll-over helpers
        this.rollOverGeo = new THREE.BoxBufferGeometry( 50, 50, 50 );
        this.rollOverMaterial = new THREE.MeshBasicMaterial( { color:  "#dd5862", opacity: 0.5, transparent: true } );
        this.rollOverMesh = new THREE.Mesh( this.rollOverGeo, this.rollOverMaterial );
        this.scene.add(this.rollOverMesh );

        // cubes

        this.cubeGeo = new THREE.BoxBufferGeometry( 50, 50, 50 );
        //this.cubeMaterial = new THREE.MeshLambertMaterial( { color:  "#dd5862", map: new THREE.TextureLoader().load( 'textures/square-outline-textured.png' ) } );

        // grid

        this.gridHelper = new THREE.GridHelper( 1000, 20 );
        this.scene.add(this.gridHelper );

        //

        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();

        this.geometry = new THREE.PlaneBufferGeometry( 1000, 1000 );
        this.geometry.rotateX( - Math.PI / 2 );

        this.plane = new THREE.Mesh( this.geometry, new THREE.MeshBasicMaterial( { visible: false } ) );
        this.scene.add( this.plane );

        this.objects.push( this.plane );

        // lights

        this.ambientLight = new THREE.AmbientLight( "#dd5862" );
        this.scene.add(this.ambientLight );

        this.directionalLight = new THREE.DirectionalLight( 0xffffff );
        this.directionalLight.position.set( 1, 0.75, 0.5 ).normalize();
        this.scene.add( this.directionalLight );

        //渲染器
        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( 900, this.mount.clientHeight );
        this.mount.appendChild( this.renderer.domElement );

        this.mount.addEventListener( 'resize', this.onWindowResize(), false );
    }
    
    onWindowResize() {

        this.camera.aspect = this.mount.clientWidth / this.mount.clientHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize( this.mount.clientWidth, this.mount.clientHeight );

    }

    onDocumentMouseMove( event ) {
       event.preventDefault();
    
        this.mouse.set( ( event.X / this.mount.clientWidth)*2-1, - ( event.Y / this.mount.clientHeight ) * 2 + 1 );
       
        this.raycaster.setFromCamera( this.mouse, this.camera );

        this.intersects = this.raycaster.intersectObjects( this.objects );

        if ( this.intersects.length > 0 ) {

            this.intersect = this.intersects[ 0 ];

            this.rollOverMesh.position.copy( this.intersect.point ).add( this.intersect.face.normal );
            this.rollOverMesh.position.divideScalar( 50 ).floor().multiplyScalar( 50 ).addScalar( 25 );

        }

        this.renders();

    }
    //  not changed
    onDocumentMouseDown( event ) {
       console.log(this.mount.clientX)
       event.preventDefault();
       this.mouse.set( ( event.clientX / this.mount.clientWidth ) * 2 - 1, - ( event.clientY / this.mount.clientHeight ) * 2 + 1 );

        this.raycaster.setFromCamera( this.mouse, this.camera );

        this.intersects = this.raycaster.intersectObjects( this.objects );

        if ( this.intersects.length > 0 ) {

            this.intersect = this.intersects[ 0 ];

            // delete cube

            if ( this.isShiftDown ) {

                if ( this.intersect.object !== this.plane ) {

                    this.scene.remove( this.intersect.object );

                    this.objects.splice( this.objects.indexOf( this.intersect.object ), 1 );

                }

                // create cube

            } else {

                this.voxel = new THREE.Mesh( this.cubeGeo, this.cubeMaterial );
                this.voxel.position.copy( this.intersect.point ).add( this.intersect.face.normal );
                this.voxel.position.divideScalar( 50 ).floor().multiplyScalar( 50 ).addScalar( 25 );
                this.scene.add( this.voxel );

                this.objects.push( this.voxel );

            }

            this.renders();

        }

    }

    onDocumentKeyDown = ( event )=> {

        switch ( event.keyCode ) {

            case 16: this.isShiftDown = true; break;

        }

    }

    onDocumentKeyUp = ( event )=> {
        switch ( event.keyCode ) {
            case 16: this.isShiftDown = false; break;
        }

    }

    renders = ()=> {

        this.renderer.render( this.scene, this.camera );

    }

    componentWillUnmount() {
        this.mount.removeChild(this.renderer.domElement)
      }
    render() {
        return (
            <div
                id= "canvas"
                onMouseMove={this.onDocumentMouseMove.bind(this)}
                onMouseDown={this.onDocumentMouseDown.bind(this)}
                onKeyDown = {this.onDocumentKeyDown.bind(this)}
                onKeyUp = {this.onDocumentKeyUp.bind(this)}
                style={{ width: '100%', height: '600px',backgroundColor:'#ccc !important' }}
                ref={(mount) => { this.mount = mount }}
            />
        );
    }
}
