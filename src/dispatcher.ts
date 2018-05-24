import { N } from "./utils";
import { assert } from "./assert";

const ON_ERR: action_name = N("onerror");

export function apply(receiver: u64, code: u64, action: u64){
	if(action === ON_ERR){
		assert(code === N("eosio"), "onerror action's are only valid from the \"eosio\" system account");
	}
	
	if(code === receiver || action === ON_ERR){
		//Get contract, perhaps set with @Contract, and call the method this action refers to.
		//Deserialize arguments if any.
	}
}
