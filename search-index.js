var searchIndex = {};
searchIndex['bit_vec'] = {"items":[[3,"BitVec","bit_vec","The bitvector type.",null,null],[3,"Iter","","An iterator for `BitVec`.",null,null],[3,"IntoIter","","",null,null],[3,"Blocks","","An iterator over the blocks of a `BitVec`.",null,null],[8,"BitBlock","","Abstracts over a pile of bits (basically unsigned primitives)",null,null],[10,"bits","","How many bits it has",0,{"inputs":[{"name":"bitblock"}],"output":{"name":"usize"}}],[11,"bytes","","How many bytes it has",0,{"inputs":[{"name":"bitblock"}],"output":{"name":"usize"}}],[10,"from_byte","","Convert a byte into this type (lowest-order bits set)",0,{"inputs":[{"name":"bitblock"},{"name":"u8"}],"output":{"name":"self"}}],[10,"count_ones","","Count the number of 1's in the bitwise repr",0,{"inputs":[{"name":"bitblock"}],"output":{"name":"usize"}}],[10,"zero","","Get `0`",0,{"inputs":[{"name":"bitblock"}],"output":{"name":"self"}}],[10,"one","","Get `1`",0,{"inputs":[{"name":"bitblock"}],"output":{"name":"self"}}],[11,"index","","",1,{"inputs":[{"name":"bitvec"},{"name":"usize"}],"output":{"name":"bool"}}],[11,"new","","Creates an empty `BitVec`.",1,{"inputs":[{"name":"bitvec"}],"output":{"name":"self"}}],[11,"from_elem","","Creates a `BitVec` that holds `nbits` elements, setting each element\nto `bit`.",1,{"inputs":[{"name":"bitvec"},{"name":"usize"},{"name":"bool"}],"output":{"name":"self"}}],[11,"with_capacity","","Constructs a new, empty `BitVec` with the specified capacity.",1,{"inputs":[{"name":"bitvec"},{"name":"usize"}],"output":{"name":"self"}}],[11,"from_bytes","","Transforms a byte-vector into a `BitVec`. Each byte becomes eight bits,\nwith the most significant bits of each byte coming first. Each\nbit becomes `true` if equal to 1 or `false` if equal to 0.",1,null],[11,"from_fn","","Creates a `BitVec` of the specified length where the value at each index\nis `f(index)`.",1,{"inputs":[{"name":"bitvec"},{"name":"usize"},{"name":"f"}],"output":{"name":"self"}}],[11,"blocks","","Iterator over the underlying blocks of data",1,{"inputs":[{"name":"bitvec"}],"output":{"name":"blocks"}}],[11,"storage","","Exposes the raw block storage of this BitVec",1,null],[11,"storage_mut","","Exposes the raw block storage of this BitVec",1,{"inputs":[{"name":"bitvec"}],"output":{"name":"vec"}}],[11,"get","","Retrieves the value at index `i`, or `None` if the index is out of bounds.",1,{"inputs":[{"name":"bitvec"},{"name":"usize"}],"output":{"name":"option"}}],[11,"set","","Sets the value of a bit at an index `i`.",1,{"inputs":[{"name":"bitvec"},{"name":"usize"},{"name":"bool"}],"output":null}],[11,"set_all","","Sets all bits to 1.",1,{"inputs":[{"name":"bitvec"}],"output":null}],[11,"negate","","Flips all bits.",1,{"inputs":[{"name":"bitvec"}],"output":null}],[11,"union","","Calculates the union of two bitvectors. This acts like the bitwise `or`\nfunction.",1,{"inputs":[{"name":"bitvec"},{"name":"self"}],"output":{"name":"bool"}}],[11,"intersect","","Calculates the intersection of two bitvectors. This acts like the\nbitwise `and` function.",1,{"inputs":[{"name":"bitvec"},{"name":"self"}],"output":{"name":"bool"}}],[11,"difference","","Calculates the difference between two bitvectors.",1,{"inputs":[{"name":"bitvec"},{"name":"self"}],"output":{"name":"bool"}}],[11,"all","","Returns `true` if all bits are 1.",1,{"inputs":[{"name":"bitvec"}],"output":{"name":"bool"}}],[11,"iter","","Returns an iterator over the elements of the vector in order.",1,{"inputs":[{"name":"bitvec"}],"output":{"name":"iter"}}],[11,"none","","Returns `true` if all bits are 0.",1,{"inputs":[{"name":"bitvec"}],"output":{"name":"bool"}}],[11,"any","","Returns `true` if any bit is 1.",1,{"inputs":[{"name":"bitvec"}],"output":{"name":"bool"}}],[11,"to_bytes","","Organises the bits into bytes, such that the first bit in the\n`BitVec` becomes the high-order bit of the first byte. If the\nsize of the `BitVec` is not a multiple of eight then trailing bits\nwill be filled-in with `false`.",1,{"inputs":[{"name":"bitvec"}],"output":{"name":"vec"}}],[11,"eq_vec","","Compares a `BitVec` to a slice of `bool`s.\nBoth the `BitVec` and slice must have the same length.",1,null],[11,"truncate","","Shortens a `BitVec`, dropping excess elements.",1,{"inputs":[{"name":"bitvec"},{"name":"usize"}],"output":null}],[11,"reserve","","Reserves capacity for at least `additional` more bits to be inserted in the given\n`BitVec`. The collection may reserve more space to avoid frequent reallocations.",1,{"inputs":[{"name":"bitvec"},{"name":"usize"}],"output":null}],[11,"reserve_exact","","Reserves the minimum capacity for exactly `additional` more bits to be inserted in the\ngiven `BitVec`. Does nothing if the capacity is already sufficient.",1,{"inputs":[{"name":"bitvec"},{"name":"usize"}],"output":null}],[11,"capacity","","Returns the capacity in bits for this bit vector. Inserting any\nelement less than this amount will not trigger a resizing.",1,{"inputs":[{"name":"bitvec"}],"output":{"name":"usize"}}],[11,"grow","","Grows the `BitVec` in-place, adding `n` copies of `value` to the `BitVec`.",1,{"inputs":[{"name":"bitvec"},{"name":"usize"},{"name":"bool"}],"output":null}],[11,"pop","","Removes the last bit from the BitVec, and returns it. Returns None if the BitVec is empty.",1,{"inputs":[{"name":"bitvec"}],"output":{"name":"option"}}],[11,"push","","Pushes a `bool` onto the end.",1,{"inputs":[{"name":"bitvec"},{"name":"bool"}],"output":null}],[11,"len","","Returns the total number of bits in this vector",1,{"inputs":[{"name":"bitvec"}],"output":{"name":"usize"}}],[11,"set_len","","Sets the number of bits that this BitVec considers initialized.",1,{"inputs":[{"name":"bitvec"},{"name":"usize"}],"output":null}],[11,"is_empty","","Returns true if there are no bits in this vector",1,{"inputs":[{"name":"bitvec"}],"output":{"name":"bool"}}],[11,"clear","","Clears all bits in this vector.",1,{"inputs":[{"name":"bitvec"}],"output":null}],[11,"default","","",1,{"inputs":[{"name":"bitvec"}],"output":{"name":"self"}}],[11,"from_iter","","",1,{"inputs":[{"name":"bitvec"},{"name":"i"}],"output":{"name":"self"}}],[11,"extend","","",1,{"inputs":[{"name":"bitvec"},{"name":"i"}],"output":null}],[11,"clone","","",1,{"inputs":[{"name":"bitvec"}],"output":{"name":"self"}}],[11,"clone_from","","",1,{"inputs":[{"name":"bitvec"},{"name":"self"}],"output":null}],[11,"partial_cmp","","",1,{"inputs":[{"name":"bitvec"},{"name":"self"}],"output":{"name":"option"}}],[11,"cmp","","",1,{"inputs":[{"name":"bitvec"},{"name":"self"}],"output":{"name":"ordering"}}],[11,"fmt","","",1,{"inputs":[{"name":"bitvec"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"hash","","",1,{"inputs":[{"name":"bitvec"},{"name":"h"}],"output":null}],[11,"eq","","",1,{"inputs":[{"name":"bitvec"},{"name":"self"}],"output":{"name":"bool"}}],[11,"clone","","",2,{"inputs":[{"name":"iter"}],"output":{"name":"iter"}}],[11,"next","","",2,{"inputs":[{"name":"iter"}],"output":{"name":"option"}}],[11,"size_hint","","",2,null],[11,"next_back","","",2,{"inputs":[{"name":"iter"}],"output":{"name":"option"}}],[11,"next","","",3,{"inputs":[{"name":"intoiter"}],"output":{"name":"option"}}],[11,"next_back","","",3,{"inputs":[{"name":"intoiter"}],"output":{"name":"option"}}],[11,"into_iter","","",1,{"inputs":[{"name":"bitvec"}],"output":{"name":"intoiter"}}],[11,"clone","","",4,{"inputs":[{"name":"blocks"}],"output":{"name":"blocks"}}],[11,"next","","",4,{"inputs":[{"name":"blocks"}],"output":{"name":"option"}}],[11,"size_hint","","",4,null],[11,"next_back","","",4,{"inputs":[{"name":"blocks"}],"output":{"name":"option"}}]],"paths":[[8,"BitBlock"],[3,"BitVec"],[3,"Iter"],[3,"IntoIter"],[3,"Blocks"]]};
initSearch(searchIndex);
