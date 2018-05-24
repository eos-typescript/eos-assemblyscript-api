
/*
*
* ACTIONS
*
*/
/**
*
* Reads @param len bytes of the action data to the pointer.
* @param dataptr the pointer to where the data should be written
* @param len the length of data to be written (0 is as much as necessary?)
* @returns the amount of bytes written
*
*/
declare function read_action_data(dataptr: usize, len: u32 ): u32;

/**
* Gets the length of bytes of the action data
* @returns action data length
*
* /
declare function action_data_size(): u32;

/**
*
* Sends an inline action.
* @param dataptr pointer to the serialized action data
* @param len length of the serialized action data at the @param dataptr
*
*/
declare function send_inline(dataptr: usize, len: u32): void;

/**
*
* Todo: Documentation
* @returns name of the current receiver
*
*/
declare function current_receiver(): u64;

/*
*
* ASSERTIONS
*
*/

/*
*
* If the value in @param conditionptr is false, throw the string in errptr and stop execution (don't believe database is persisted).
* @param conditionptr pointer to the boolean condition. Not sure of the encoding.
* @param errtr pointer to the error message that will be printed in case this fails
*
*/
declare function eosio_assert(conditionptr: usize, errptr: usize);

/**
*
* The program throws an error and stops in case the action was not authenticated by the user's permissions.
*
*/
declare function require_auth(name: account_name): void;

declare function require_auth2(name: account_name, permission: permission_name);


/*
*
* PRINTING
*
*/

/*
*
* Prints a string in the eos runtime console. This string must be utf-8 encoded and null terminated.
* @param strptr pointer to the string: this can be retrieved through "somestring".toUTF8().
*
*/
declare function prints(strptr: usize): void;

/*
* Prints an eos name, in the string format, to the runtime console.
* @param name the name
*/
declare function printn(name: account_name): void;
/*
* Prints an i64 to the runtime console.
* @param num the integer
*/
declare function printi(num: i64): void;

/*
* Prints an u64 to the runtime console
* @param num the integer
*/
declare function printui(num: u64): void;

/*
*
* DATABASE
* Todo: Add support for methods that have uint128 as argument.
* Todo: Change more pointers to usize
*/


declare function db_store_i64(scope: account_name, table: table_name, payer: account_name, id: u64, data: usize, len: u32): i32;
declare function db_update_i64(iterator: i32, payer: account_name, data: usize, len: u32): void;
declare function db_remove_i64(iterator: i32): void;
declare function db_get_i64(iterator: i32, data: usize, len: u32): i32;
declare function db_next_i64(iterator: i32, primary: i32): i32;
declare function db_previous_i64(iterator: i32, primary: i32): i32;
declare function db_find_i64(code: account_name, scope: account_name, table: table_name, id: u64): i32;
declare function db_lowerbound_i64(code: account_name, scope: account_name, table: table_name, id: u64): i32;
declare function db_upperbound_i64(code: account_name, scope: account_name, table: table_name, id: u64): i32;
declare function db_end_i64(code: account_name, scope: account_name, table: table_name): i32;

declare function db_idx64_store(scope: account_name, table: table_name, payer: account_name, id: u64, secondary: usize): i32;
declare function db_idx64_update(iterator: i32, payer: account_name, secondary: usize): void;
declare function db_idx64_remove(iterator: i32): void;
declare function db_idx64_next(iterator: i32, primary: usize): i32;
declare function db_idx64_previous(iterator: i32, primary: usize): i32;
declare function db_idx64_find_primary(code: account_name, scope: account_name, table: table_name, secondary: usize, primary: u64): i32;
declare function db_idx64_find_secondary(code: account_name, scope: account_name, table: table_name, secondary: usize, primary: usize): i32;
declare function db_idx64_lowerbound(code: account_name, scope: account_name, table: table_name, secondary: usize, primary: usize): i32;
declare function db_idx64_upperbound(code: account_name, scope: account_name, table: table_name, secondary: usize, primary: usize): i32;
declare function db_idx64_end(code: account_name, scope: account_name, table: table_name): i32;

declare function db_idx256_store(scope: account_name, table: table_name, payer: account_name, id: u64, data: usize, data_len: u32): i32;
declare function db_idx256_update(iterator: i32, payer: account_name, data: usize, data_len: u32): void;
declare function db_idx256_remove(iterator: i32): void;
declare function db_idx256_next(iterator: i32, primary: usize): i32;
declare function db_idx256_previous(iterator: i32, primary: usize): i32;
declare function db_idx256_find_primary(code: account_name, scope: account_name, table: table_name, data: usize, data_len: u32, primary: u64): i32;
declare function db_idx256_find_secondary(code: account_name, scope: account_name, table: table_name, data: usize, data_len: u32, primary: usize): i32;
declare function db_idx256_lowerbound(code: account_name, scope: account_name, table: table_name, data: usize, data_len: u32, primary: usize): i32;
declare function db_idx256_upperbound(code: account_name, scope: account_name, table: table_name, data: usize, data_len: u32, primary: usize): i32;
declare function db_idx256_end(code: account_name, scope: account_name, table: table_name): i32;

/*
*
* CRYPTO
* Todo: Find out which arguments are for what, rename them, and add usize.
*
*/

declare function assert_sha256(p1: i32, p2: i32, p3: i32): void;
declare function sha256(p1: i32, p2: i32, p3: i32): void;


/*
*
* UTILITY
*
*/

/*
*
* Gets the time of the the last block.
* @return the time in millis of the last block
*
*/
declare function current_time(): u64;
