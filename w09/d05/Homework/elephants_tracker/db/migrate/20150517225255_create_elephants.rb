class CreateElephants < ActiveRecord::Migration
  def change
    create_table :elephants do |t|
    	t.string :name
    	t.integer :age
    	t.boolean :has_tusks
    end
  end
end
