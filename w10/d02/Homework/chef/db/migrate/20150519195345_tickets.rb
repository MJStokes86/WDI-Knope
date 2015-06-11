class Tickets < ActiveRecord::Migration
  def change
  	create_table :tickets do |t|
  		t.string :menu_item
  		t.string :comments
  		t.integer :table_number
  	end
  end
end
