type name = u64;
type account_name = name;
type permission_name = name;
type table_name = name;
type scope_name = name;
type action_name = name;

/**
 *
 * Converts a string into a 64 bit eos name.
 *
 */
export function N(str: string) : name {
  var name : u64 = 0;
  var i    : i32 = 0;
  for(; i < str.length && i < 12 ; i++) {
    name |= (char_to_symbol(str.charCodeAt(i)) & <u64>0x1f) << (64 - 5 * (i + 1));
  }
  if (i == 12)
    name |= char_to_symbol(str.charCodeAt(12)) & <u64>0x0F;
  return name;
}

