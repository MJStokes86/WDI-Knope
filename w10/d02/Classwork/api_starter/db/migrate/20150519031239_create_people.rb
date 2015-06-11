class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :company
      t.string :catchphrase


      t.timestamps null: false
    end
  end
end
