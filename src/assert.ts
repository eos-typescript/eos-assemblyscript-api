import { eosio_assert } from "./eos_interface";

function assert(condition: bool, err: string): void{
	eosio_assert(condition, err.toUTF8());
}
