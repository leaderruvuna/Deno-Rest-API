
import cars from "../database/db.ts";
import { Car } from '../interfaces/index.ts';
import httpResponse from './helpers/responses.ts';
import { httpCodes } from '../constants/index.ts';



class CarsController {

    static getCars = async ({ response }: { response: any }) => {
        const car = await cars.find();
        httpResponse( response , httpCodes.HTTP_OK , car );
    };
      
      
    static getCar = async ({
        params,
        response,
    }: {
        params: { id: string };
        response: any;
    }) => {
       
        const car = await cars.findOne({ _id: { $oid: params.id } });
        httpResponse( response , httpCodes.HTTP_OK , car );
       
    };
      
    static root = ({ response }: { response: any }) => {
          response.body =
            " Welcome to the cars selling  api ";
    };

}


export default CarsController;