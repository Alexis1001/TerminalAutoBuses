'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('user/register','UserController.store');
  Route.post('user/login','UserController.login');

  //inssert un nuevo autobus
  Route.post('user/add/bus','BusController.create');
  //darle de baja o alta un autobus por mantenimineto
  Route.put('user/update/status/bus/:id','BusController.updateStatus');
  //cambiar la hora o fecha o el destino o cambiar,hora,fecha y destino
  Route.put('user/update/:id','BusController.update');
  //obtener todos los autobuses
  Route.get('user/all','BusController.index');
  //obtener bus por id 
  Route.get('user/bus/:id','BusController.show');

  // agregar hostorial de cada auto bus
  Route.post('user/history','HistoryController.store');
  // obtener todos los autobuses 
  Route.get('user/history','HistoryController.index');
  // obtener historial de un bus en especifico
  Route.post('user/history/bus','HistoryController.indexByBus');

  //agregar las ventas de los compradores 
  Route.post('user/venta','VentaController.store'); 
  //obtener las ventas de los auto buses 
  Route.get('user/venta','VentaController.index'); 
  //obtener los asientos de un bus en especifico
  Route.post('user/ventas/bus','VentaController.indexByBus'); 


}).prefix('api/v1/');
